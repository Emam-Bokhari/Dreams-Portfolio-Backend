"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactRoutes = void 0;
const express_1 = __importDefault(require("express"));
const contact_controller_1 = require("./contact.controller");
const validateRequestSchema_1 = require("../../middlewares/validateRequestSchema");
const contact_validation_1 = require("./contact.validation");
const router = express_1.default.Router();
router.post('/', (0, validateRequestSchema_1.validateRequestSchema)(contact_validation_1.ContactValidationSchema.createContactValidationSchema), contact_controller_1.ContactControllers.createContactController);
router.get('/', contact_controller_1.ContactControllers.getAllContactsController);
router.get('/:id', contact_controller_1.ContactControllers.getContactController);
router.delete('/:id', contact_controller_1.ContactControllers.deleteContactController);
exports.ContactRoutes = router;
