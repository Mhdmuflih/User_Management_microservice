import { error } from "console";
import jwt from "jsonwebtoken";
import { ObjectId } from "mongoose";

const generateToken = (Payload: ObjectId): string => {
    if(!process.env.JWT_SECRET) {
        throw new Error("JWT_SECRET is not defined in the environment variables");
    }

    return jwt.sign(
        { Payload },
        process.env.JWT_SECRET,
        { expiresIn: '1h' }
    );
}

export default generateToken;