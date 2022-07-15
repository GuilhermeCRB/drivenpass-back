import { Request, Response } from "express";

import { CreateUser, generateToken, signUpUser } from "../services/accessService.js";

export async function signUp(req: Request, res: Response) {
    const user: CreateUser = res.locals.data;
    await signUpUser(user);
    res.sendStatus(201);
}

export async function signIn(req: Request, res: Response) {
    const user: CreateUser = res.locals.data;
    const token = generateToken(user);
    res.status(200).send({token});
}