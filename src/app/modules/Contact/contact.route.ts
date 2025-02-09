import express from 'express';
import { ContactControllers } from './contact.controller';
import { validateRequestSchema } from '../../middlewares/validateRequestSchema';
import { ContactValidationSchema } from './contact.validation';

const router = express.Router();

router.post(
  '/',
  validateRequestSchema(ContactValidationSchema.createContactValidationSchema),
  ContactControllers.createContactController,
);

router.get('/', ContactControllers.getAllContactsController);

router.get('/:id', ContactControllers.getContactController);

router.delete('/:id', ContactControllers.deleteContactController);

export const ContactRoutes = router;
