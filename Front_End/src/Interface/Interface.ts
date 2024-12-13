import { ObjectId } from "mongoose";

export interface User {
    _id: ObjectId;
    name: string;
    email: string;
    mobile: number;
    password: string;
    is_Block: boolean;
    is_Verfied: boolean
}

export interface UserReduxInitialStateManage {
    isLoggedIn: boolean;
    user: User | null;
    change: boolean
}

export interface LoginPayload {
    token: string;
    isLoggedIn: boolean;
    user: User;
    change?: boolean
}