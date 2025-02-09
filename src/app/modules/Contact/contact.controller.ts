import { asyncHandler } from "../../utils/global/asyncHandler";
import { sendResponse } from "../../utils/global/sendResponse";
import { ContactServices } from "./contact.service";

const createContact = asyncHandler(async (req, res) => {
    const contactPayload = req.body;
    const createdContact = await ContactServices.createContact(contactPayload);

    sendResponse(res, {
        success: true,
        statusCode: 201,
        message: "Contact is created successfully",
        data: createdContact,
    })
})

export const ContactControllers = {
    createContact,
}