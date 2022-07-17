import { Wifi } from "@prisma/client";
import Joi from "joi";

export type InputWiFi = Omit<Wifi, "id" | "userId" | "createdAT">;

export const wiFiSchema = Joi.object<InputWiFi>({
    label: Joi.string().required(),
    name: Joi.string().required(),
    password: Joi.string().required()
});