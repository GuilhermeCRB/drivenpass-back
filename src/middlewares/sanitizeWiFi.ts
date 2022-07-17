import { Request, Response, NextFunction } from "express";
import { stripHtml } from "string-strip-html";

import { InputWiFi } from "../schemas/wiFiSchema.js";

export function sanitizeWiFi(req: Request, res: Response, next: NextFunction) {
    const receivedWiFi: InputWiFi = req.body;
    const entity = "wifi";

    const wifi: InputWiFi = {
        ...receivedWiFi,
        label: stripHtml(receivedWiFi.label).result,
        name: stripHtml(receivedWiFi.name).result,
        password: stripHtml(receivedWiFi.password).result
    }

    res.locals.data = wifi;
    res.locals.entity = entity;

    next();
}