import bcrypt from "bcrypt";
import { Request, Response, NextFunction } from "express";

import { getUserByEmail } from "../repositories/accessRepository.js";
import { CreateUser } from "../services/accessService.js";

export async function matchEmailAndPassword(req: Request, res: Response, next: NextFunction) {
    const user: CreateUser = res.locals.data;
    const isValidated: boolean = await checkUser(user, res);

    if(!isValidated) return res.status(401).send("Not allowed. Check your email and password.");

    next();
}

async function checkUser({email, password}: {email: string, password: string}, res: Response){
    const userFromDb = await getUserByEmail(email);

    if(!userFromDb) return false;
    
    return bcrypt.compareSync(password, userFromDb.password);
}