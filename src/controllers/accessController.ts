import { Request, Response } from "express";
import { CreateUser, signUpUser } from "../services/accessService.js";

export async function signUp(req: Request, res: Response) {
    const user: CreateUser = res.locals.user;
    await signUpUser(user);
    res.sendStatus(201);
}