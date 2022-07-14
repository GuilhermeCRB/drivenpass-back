import { Request, Response, NextFunction } from "express";
import { stripHtml } from "string-strip-html";

import { CreateUser } from "../services/accessService.js";

export function sanitizeUser(req: Request, res: Response, next: NextFunction) {
    const receivedUser = req.body;

    const user: CreateUser = {
        ...receivedUser,
        email: stripHtml(receivedUser.email).result,
        password: stripHtml(receivedUser.password).result
    }

    res.locals.user = user;

    next();
}