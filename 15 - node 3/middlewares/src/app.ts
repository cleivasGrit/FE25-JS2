import express, { type NextFunction, type Request, type Response } from "express";
import cors from "cors";

import { middleware, usersMiddleware } from "./middlewares";
import { userRouter } from "./userRoutes";
import { commentRouter } from "./commentRoutes";

export const app = express();
app.use(express.json())
app.use(cors());


app.use(middleware);
// app.use('/users', usersMiddleware);

app.use('/users', userRouter);
app.use('/comments', commentRouter);

// Skicka tillbaka 404 och json när ingen handler har passat in, istället för express default html
app.use((req:Request, res:Response)=>{
    res.status(404).json({message: 'Endpoint not found'});
})

// Uppsamling för alla ofångade fel.
app.use((err: Error, req: Request, res:Response,next:NextFunction)=>{
    res.status(500).json({message: 'Server error'});
})