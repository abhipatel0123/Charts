import express from "express";
import {
  registerController,
  loginController,
  profileController,
} from "../controller/authController.js";

const router = express.Router();

router.post("/register", registerController);
router.post("/login", loginController);
router.post("/profile", profileController);

export default router;
