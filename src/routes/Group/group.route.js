import express from "express";

const router = express.Router();

//Controllers
import { showGroups } from "../../controllers/Group/ShowGroups/showGroups.controller.js";
import { createGroup } from "../../controllers/Group/CreateGroup/createGroup.controller.js";
import { enterGroup } from "../../controllers/Group/EnterGroup/enterGroup.controller.js";

//Middleware
import protectUser from "../../middleware/protectUser.js";

router.get("/show", [protectUser], showGroups);
router.post("/create", [protectUser], createGroup);
router.put("/enter", [protectUser], enterGroup);

export default router;