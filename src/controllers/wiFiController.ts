import { Request, Response } from "express";
// import { Credential } from "@prisma/client";

import { postWiFi } from "../services/wiFiService.js";

export async function createWiFi(req: Request, res: Response) {
    await postWiFi(res);
    return res.sendStatus(201);
}

// export async function findCredentials(req: Request, res: Response) {
//     const credential: Credential | undefined = res.locals.entityData;
//     const { id }: { id: number } = res.locals.user;

//     if (credential) {
//         const decryptedCredential = decryptCredential([credential]);
//         return res.status(200).send(decryptedCredential[0]);
//     } else {
//         const entity: string = res.locals.entity;
//         const credentialsArray = await getDecryptedCredentials(entity, id);
//         return res.status(200).send(credentialsArray);
//     }
// }

// export async function eraseCredential(req: Request, res: Response) {
//     const id: number = res.locals.id;
//     const entity: string = res.locals.entity;
//     await eraseUserCredential(entity, id);
//     return res.sendStatus(204);
// }