import mongoose from "mongoose";

mongoose.set("strictQuery" , true);

const connectDB = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGO_URL as string, {dbName:"User_Management"})
        console.log(`MongoDB connected successfully.: ${connect.connection.host}`);
    } catch (error: any) {
        console.error("Failed to connect MongoDB" , error);
        process.exit(1);
    }
}

export default connectDB;