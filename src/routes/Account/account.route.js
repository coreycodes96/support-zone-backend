import express from "express";

const router = express.Router();

//Controllers
import { createAccount } from "../../controllers/Account/CreateAccount/createAccount.controller.js";
import { login } from "../../controllers/Account/Login/login.controller.js";

router.post("/create_account", createAccount);
router.post("/login/", login);

export default router;