import { Request, Response, NextFunction } from "express";

import { TokenUser } from "../controllers/accessController.js";
import { getEntityById } from "../repositories/entityRepository.js";

export default async function checkEntityId(req: Request, res: Response, next: NextFunction) {
    const entity = choseEntity(req);
    res.locals.entity = entity;

    const entityId: number | undefined = res.locals.id;
    if(!entityId) return next();

    const user: TokenUser = res.locals.user;
    const entityData = await getEntityById(entity, entityId);
    if(!entityData) return res.status(404).send("Not found");
    if(user.id !== entityData.userId) return res.status(401).send("Not allowed");

    res.locals.entityData = entityData;

    next();
}

function choseEntity(req: Request){
    if(req.route.path === "/credentials" || req.route.path === "/credentials/:id"){
        return "credential";
    }

    if(req.route.path === "/safe-notes" || req.route.path === "/safe-notes/:id"){
        return "safeNote";
    }

    if(req.route.path === "/wi-fi" || req.route.path === "/wi-fi/:id"){
        return "wifi";
    }
}