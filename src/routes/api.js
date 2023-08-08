import { Router } from "express";
import authController from "../controllers/auth";
import linkController from "../controllers/link";
import {
  loginValidator,
  registerValidator,
} from "../middleware/validator/auth";
import { validate } from "../middleware/validator";
import { body } from "express-validator";
import { createLinkValidator } from "../middleware/validator/link";

const apiRoutes = Router();

apiRoutes.post(
  "/register",
  registerValidator,
  validate,
  authController.register
);
apiRoutes.post("/login", loginValidator, validate, authController.login);
apiRoutes.get("/logout", authController.logout);

apiRoutes.post("/link", createLinkValidator, validate, linkController.create);
apiRoutes.put("/link", linkController.update);
apiRoutes.get("/link/:userId", linkController.listAllByUserId);

export default apiRoutes;
