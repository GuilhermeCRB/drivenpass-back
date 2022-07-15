import bcrypt from "bcrypt";
import { Request, Response, NextFunction } from "express";

import { getUserByEmail } from "../repositories/accessRepository.js";
import { CreateUser } from "../services/accessService.js";

export async function matchEmailAndPassword(req: Request, res: Response, next: NextFunction) {
    const user: CreateUser = res.locals.user;
    const isValidated: boolean = await checkUser(user);

    if(!isValidated) return res.status(401).send("Not allowed. Check your email and password.");

    next();
}

async function checkUser({email, password}: {email: string, password: string}){
    const userFromDb = await getUserByEmail(email);
    return bcrypt.compareSync(password, userFromDb.password);
}