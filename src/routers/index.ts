import { Router } from "express";

import access from "./access";
import wifi from "./wifi";
import cards from "./cards";
import safeNotes from "./safeNotes";
import credentials from "./ credentials";

const router = Router();

router.use(access);
router.use(wifi);
router.use(cards);
router.use(safeNotes);
router.use(credentials);

export default router;