import { Request, Response, NextFunction } from "express";
import { stripHtml } from "string-strip-html";

import { InputSafeNote } from "../schemas/safeNoteSchema.js";

export function sanitizeSafeNote(req: Request, res: Response, next: NextFunction) {
    const receivedSafeNote: InputSafeNote = req.body;
    const entity = "safeNote";

    const safeNote: InputSafeNote = {
        ...receivedSafeNote,
        label: stripHtml(receivedSafeNote.label).result,
        note: stripHtml(receivedSafeNote.note).result
    }

    res.locals.data = safeNote;
    res.locals.entity = entity;

    next();
}