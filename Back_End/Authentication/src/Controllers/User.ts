import { Request, Response } from "express";
import bcypt from "bcryptjs";
import { UserData, userType, } from "../Interface/userInput";
import UserModel from "../Model/UserModel";
import generateToken from "../JWT/jwt";
import { sendNotification } from "../services/Notification";

const passwordHashing = async (password: string): Promise<string | undefined> => {
    try {
        const passwordHash = await bcypt.hash(password, 10);
        console.log("user password:", password)
        console.log(`Hash Passowrd: ${passwordHash}`);
        return passwordHash;
    } catch (error: any) {
        console.log(error.message);
    }
}

const insertUser = async (req: Request, res: Response): Promise<any> => {
    try {
        const { name, email, mobile, password } = req.body as userType

        if (!name && !email && !mobile && !password) {
            return res.status(200).json({ success: false, message: "could you please fill the data" });
        }

        const existingEmail = await UserModel.findOne({ email: email });

        if (existingEmail) {
            return res.status(200).json({ success: false, message: "Already Existing this email." });
        }

        const securePassword: string | undefined = await passwordHashing(password);

        const user = new UserModel({
            name: name,
            mobile: mobile,
            email: email,
            password: securePassword,
        });

        await user.save();

        return res.status(200).json({ success: true, message: "Registration Successfull." });
    } catch (error: any) {
        console.log(error.message);
        res.status(500).json({ success: false, message: 'Server error' });
    }

}

const login = async (req: Request, res: Response): Promise<any> => {
    try {
        const { email, password } = req.body;

        const userData: UserData | null = await UserModel.findOne({ email: email });
        console.log(userData, 'this is userdata');

        if (!userData) {
            return res.status(200).json({ success: false, message: "user data is not found!" });
        }

        const passwordMatch: boolean = await bcypt.compare(password, userData?.password);

        if (!passwordMatch) {
            return res.status(200).json({ success: false, message: "Password is not match!" });
        }

        const token: string = generateToken(userData._id);

        const notificationResponse = await sendNotification(
            email,
            'You have successfully logged in!',
        );

        console.log('Notification response:', notificationResponse);


        res.status(200).json({ success: true, message: "Login Successful", token: token, user: userData });

    } catch (error: any) {
        console.log(error.message);
        res.status(500).json({ success: false, message: 'Server error' });
    }
}

const editUser = async (req: Request, res: Response): Promise<any> => {
    try {
        const { name, email, mobile } = req.body;
        const { id } = req.params;

        const user = await UserModel.findById(id);
        if (!user) {
            return res.status(200).json({ success: false, message: "User is not found!" });
        }

        const emailExist = await UserModel.findOne({ email: email, _id: { $ne: user._id } });
        if (emailExist) {
            return res.status(200).json({ success: false, message: "This email is already exisit" });
        }

        const updateUserData = await UserModel.findByIdAndUpdate(
            { _id: user._id },
            { name: name, email: email, mobile: mobile },
            { new: true }
        )

        if (!updateUserData) {
            return res.status(200).json({ success: false, message: "Failed to update user Data" });
        }

        return res.status(200).json({ success: true, message: "User Profile Update Successfully.", user: updateUserData });

    } catch (error: any) {
        console.log(error.message);
        return res.status(500).json({ success: false, message: "Server Errro!" });
    }
}

export {
    insertUser,
    login,
    editUser
}