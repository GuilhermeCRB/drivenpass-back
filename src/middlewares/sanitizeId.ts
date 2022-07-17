import { Request, Response, NextFunction } from "express";
import { stripHtml } from "string-strip-html";

export function sanitizeId(req: Request, res: Response, next: NextFunction) {
    const queryId: any = req.query.id; //if type is set as "string" or left without declaration, stripHtml throws an error
    const paramsId: any = req.params.id;

    if(queryId){
        const id: string = stripHtml(queryId).result;
        res.locals.id = +id;
    }

    if(paramsId){
        const id: string = stripHtml(paramsId).result;
        res.locals.id = +id;
    }

    next();
}