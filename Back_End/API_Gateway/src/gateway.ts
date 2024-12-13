import express, { Application, Request, Response } from 'express';
import proxy from "express-http-proxy";
import morgan from 'morgan';
import cors from "cors";

const app: Application = express();

const corsOption = {
    origin: "http://localhost:5173",
    Credential: true
}

app.use(cors(corsOption));
app.use(morgan('tiny'));

app.use('/', proxy("http://localhost:1000"));
app.use('/user', proxy("http://localhost:3000"));

const port: number = 8080;

app.listen(port, ()=> {
    console.log(`Gateway Service Running on Ports: http://localhost:${port}`)
})