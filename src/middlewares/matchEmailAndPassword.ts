import { User } from "@prisma/client";
import bcrypt from "bcrypt";
import { Request, Response, NextFunction } from "express";

import { getUserByEmail } from "../repositories/accessRepository.js";
import { CreateUser } from "../services/accessService.js";

export async function matchEmailAndPassword(req: Request, res: Response, next: NextFunction) {
    const user: CreateUser = res.locals.data;

    const userFromDb: User = await getUserByEmail(user.email);
    const isValidated: boolean = bcrypt.compareSync(user.password, userFromDb.password);
    if (!userFromDb || !isValidated) return res.status(401).send("Not allowed. Check your email and password.");

    res.locals.user = {id: userFromDb.id, email: userFromDb.email};

    next();
}