import type {Request, Response, NextFunction} from "express";

export const middleware = (req: Request, res: Response, next: NextFunction ) =>{
    console.log('Middleware called');
    // Bara för demonstrationssyften
    // req.message = 'This message was added';

    console.log(req.ip, req.path, req.method)
    next();
}

export const usersMiddleware = (req: Request, res: Response, next: NextFunction ) =>{
    console.log('Users Middleware called only for users');
    next();
}