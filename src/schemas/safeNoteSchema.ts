import { SafeNote } from "@prisma/client";
import Joi from "joi";

export type InputSafeNote = Omit<SafeNote, "id" | "userId" | "createdAT">;

export const safeNoteSchema = Joi.object<InputSafeNote>({
    label: Joi.string().max(50).required(),
    note: Joi.string().max(1000).required()
});