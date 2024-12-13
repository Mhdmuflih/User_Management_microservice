import { ObjectId } from "mongoose";


export interface userType {
    name: string,
    email: string,
    mobile: number,
    password: string
}


export interface UserData {
    _id: ObjectId;
    name: string;
    email: string;
    password: string;
    mobile: number;
    is_Block: boolean;
    is_Verified: string;
    __v: number;
}