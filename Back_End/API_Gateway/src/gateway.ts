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

// docker running user_service
// minikube running user-service.default.svc.cluster.local:1000
// docker-compose up --build
app.use('/', proxy("user-service.default.svc.cluster.local:1000"));


const port: number = 8080;

app.listen(port, ()=> {
    console.log(`Gateway Service Running on Ports: http://localhost:${port}`)
})