import { Router } from "express";

import { createSafeNote, eraseSafeNote, findSafeNote } from "../controllers/safeNotesController.js";
import checkEntityId from "../middlewares/checkEntityId.js";
import isLabelUnique from "../middlewares/isLabelUnique.js";
import { sanitizeId } from "../middlewares/sanitizeId.js";
import { sanitizeSafeNote } from "../middlewares/sanitizeSafeNote.js";
import { validateSchema } from "../middlewares/validateSchema.js";
import validateToken from "../middlewares/validateToken.js";
import { safeNoteSchema } from "../schemas/safeNoteSchema.js";


const safeNotes = Router();

safeNotes.post("/safe-notes",
    validateToken,
    sanitizeSafeNote,
    validateSchema(safeNoteSchema),
    isLabelUnique,
    createSafeNote
);

safeNotes.get("/safe-notes",
    validateToken,
    sanitizeId,
    checkEntityId,
    findSafeNote
);

safeNotes.delete("/safe-notes/:id",
    validateToken,
    sanitizeId,
    checkEntityId,
    eraseSafeNote
);

export default safeNotes;