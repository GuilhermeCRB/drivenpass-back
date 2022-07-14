import { Request, Response } from "express";
import { signUpUser } from "../services/accessService.js";

export async function signUp(req: Request, res: Response) {
    const { email, password }: { email: string, password: string } = req.body;
    await signUpUser({ email, password });

    res.sendStatus(201);
}