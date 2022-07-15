import { Credential } from "@prisma/client";
import Joi from "joi";

export type InputCredential = Omit<Credential, "id" | "userId" | "createdAT">;

export const credentialSchema = Joi.object<InputCredential>({
    label: Joi.string().required(),
    url: Joi.string().uri().required(),
    userName: Joi.string().required(),
    password: Joi.string().required()
});