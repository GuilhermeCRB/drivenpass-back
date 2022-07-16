import { Router } from "express";

import { createSafeNote } from "../controllers/safeNotesController.js";
import isLabelUnique from "../middlewares/isLabelUnique.js";
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
    
);

safeNotes.delete("/safe-notes/:id",
    
);

export default safeNotes;