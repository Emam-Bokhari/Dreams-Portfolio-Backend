import { TContact } from "./contact.interface";
import { Contact } from "./contact.model";

const createContact = async (payload: TContact) => {
    const createdContact = await Contact.create(payload);
    return createdContact;
}

export const ContactServices = {
    createContact,
}