import { Response } from "express";

import { InputSafeNote } from "../schemas/safeNoteSchema";

import { TokenUser } from "../controllers/accessController.js";
import { deleteCredential, getCredentials, saveEntity } from "../repositories/entityRepository.js";

export async function postSafeNote(res: Response) {
    const user: TokenUser = res.locals.user;
    const entity: string = res.locals.entity;
    const safeNoteInputs: InputSafeNote = res.locals.data;
    const safeNote = formatCredential(safeNoteInputs, user.id);
    await saveEntity(entity, safeNote);
}

function formatCredential(credentialInputs: InputSafeNote, userId: number) {
    return ({
        ...credentialInputs,
        userId
    });
}

// export function decryptCredential(credentials: Credential[]) {
//     const cryptr = new Cryptr(process.env.CRYPTR_KEY);

//     return credentials.map(credential => {
//         const decryptedPassword = cryptr.decrypt(credential.password);
//         return { ...credential, password: decryptedPassword };
//     });
// }

// export async function getDecryptedCredentials(entity: string, userId: number) {
//     const credentials = await getCredentials(entity, userId);
//     return decryptCredential(credentials);
// }

// export async function eraseUserCredential(entity: string, id: number) {
//     await deleteCredential(entity, id);
// }