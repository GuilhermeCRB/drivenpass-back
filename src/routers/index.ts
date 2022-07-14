import { Router } from "express";

import access from "./access.js";
import wifi from "./wifi.js";
import cards from "./cards.js";
import safeNotes from "./safeNotes.js";
import credentials from "./ credentials.js";

const router = Router();

router.use(access);
router.use(wifi);
router.use(cards);
router.use(safeNotes);
router.use(credentials);

export default router;