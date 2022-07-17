import { Card } from "@prisma/client";
import Joi from "joi";

export type InputCard = Omit<Card, "id" | "userId" | "createdAT">;

export const cardSchema = Joi.object<InputCard>({
    number: Joi.string().required(),
    label: Joi.string().required(),
    name: Joi.string().required(),
    cvv: Joi.string().required(),
    expiringDate: Joi.string().required(),
    password: Joi.string().required(),
    isVirtual: Joi.boolean(),
    typeId: Joi.number().required()
});