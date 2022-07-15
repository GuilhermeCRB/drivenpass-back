import { Request, Response, NextFunction } from "express";
import { stripHtml } from "string-strip-html";

export function sanitizeId(req: Request, res: Response, next: NextFunction) {
    const receivedId: any = req.query.id; //if type is set as "string" or left without declaration, stripHtml throws an error
    if(receivedId){
        const id: string = stripHtml(receivedId).result;
        res.locals.id = +id;
    }

    next();
}