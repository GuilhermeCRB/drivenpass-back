import { Request, Response } from "express";
import { Wifi } from "@prisma/client";

import { decryptWiFi, getDecryptedWiFi, postWiFi } from "../services/wiFiService.js";

export async function createWiFi(req: Request, res: Response) {
    await postWiFi(res);
    return res.sendStatus(201);
}

export async function findWifi(req: Request, res: Response) {
    const wiFi: Wifi | undefined = res.locals.entityData;
    const { id }: { id: number } = res.locals.user;

    if (wiFi) {
        const decryptedWiFi = decryptWiFi([wiFi]);
        return res.status(200).send(decryptedWiFi[0]);
    } else {
        const entity: string = res.locals.entity;
        const wiFiArray = await getDecryptedWiFi(entity, id);
        return res.status(200).send(wiFiArray);
    }
}

// export async function eraseCredential(req: Request, res: Response) {
//     const id: number = res.locals.id;
//     const entity: string = res.locals.entity;
//     await eraseUserCredential(entity, id);
//     return res.sendStatus(204);
// }