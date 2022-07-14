import { Request, Response, NextFunction } from "express";

import { checkEmail } from "../repositories/accessRepository.js";

export async function isEmailUnique(req: Request, res: Response, next: NextFunction) {
    const { email }: { email: string } = res.locals.user;
    await checkEmail(email);

    if(email) return res.status(409).send("This email is already being used");

    next();
}