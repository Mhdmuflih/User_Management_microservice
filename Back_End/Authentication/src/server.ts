import express, { Application } from "express";
import cors from "cors";
import dotenv from "dotenv";


import user_route from "./Routes/UserRoute";
import admin_route from "./Routes/AdminRoute";
import connectDB from "./Database/Database";


dotenv.config();

connectDB();

const app: Application = express();

const corsOptions = {
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true 
};

app.use(cors(corsOptions));
app.use(express.json());

app.use('/', user_route);
app.use('/admin', admin_route);

const port: number = Number(process.env.PORT) || 5000;

app.listen(port, () => {
    console.log(`Authentication Server Running on port: http://localhost:${port} `);
});