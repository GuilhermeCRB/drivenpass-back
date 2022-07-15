import { Request, Response, NextFunction } from "express";

import { getUserByEmail } from "../repositories/accessRepository.js";

export async function isEmailUnique(req: Request, res: Response, next: NextFunction) {
    const { email }: { email: string } = res.locals.user;
    const user = await getUserByEmail(email);

    if(user) return res.status(409).send("This email is already being used");

    next();
}