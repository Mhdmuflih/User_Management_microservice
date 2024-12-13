import express, { Application } from "express";
import { editUser, insertUser, login } from "../Controllers/User";

const user_route: Application = express();

user_route.post('/signup', insertUser);
user_route.post('/login', login);
user_route.patch('/edit-user/:id', editUser);

export default user_route;