import express from "express";
import { ContactControllers } from "./contact.controller";

const router = express.Router();

router.post("/", ContactControllers.createContactController);

router.get("/", ContactControllers.getAllContactsController);

router.get("/:id", ContactControllers.getContactController);

router.delete("/:id", ContactControllers.deleteContactController);

export const ContactRoutes = router;