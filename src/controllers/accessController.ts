import { Request, Response } from "express";
import { signUpUser } from "../repositories/accessRepository.js";

import { encryptPassword } from "../services/accessService.js";

export async function signUp(req: Request, res: Response) {
    const { email, password }: { email: string, password: string } = req.body;

    const encryptedPassword: string = encryptPassword(password);
    await signUpUser({email, password: encryptedPassword});

    res.sendStatus(201);
}