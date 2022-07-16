import { Request, Response } from "express";

import { postSafeNote } from "../services/safeNoteService.js";

// import { decryptCredential, eraseUserCredential, getDecryptedCredentials, postCredential } from "../services/creadentialService.js";

export async function createSafeNote(req: Request, res: Response) {
    await postSafeNote(res);
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