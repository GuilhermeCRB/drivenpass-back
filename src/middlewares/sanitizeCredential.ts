import { Request, Response, NextFunction } from "express";
import { stripHtml } from "string-strip-html";

import { InputCredential } from "../schemas/credentialSchema";

export function sanitizeCredential(req: Request, res: Response, next: NextFunction) {
    const receivedCredential: InputCredential = req.body;

    const credential: InputCredential = {
        ...receivedCredential,
        label: stripHtml(receivedCredential.label).result,
        url: stripHtml(receivedCredential.url).result,
        userName: stripHtml(receivedCredential.userName).result,
        password: stripHtml(receivedCredential.password).result
    }

    res.locals.data = credential;

    next();
}