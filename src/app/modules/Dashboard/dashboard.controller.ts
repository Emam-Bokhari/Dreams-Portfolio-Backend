import { asyncHandler } from "../../utils/global/asyncHandler";
import { sendResponse } from "../../utils/global/sendResponse";
import { DashboardServices } from "./dashboard.service";

const getDashboardDataController = asyncHandler(async (req, res) => {
    const data = await DashboardServices.getDashboardData();
    sendResponse(res, {
        success: true,
        message: "Dashboard data is retrieved successfully",
        statusCode: 200,
        data: data,
    })
})

export const DashboardControllers = {
    getDashboardDataController,
}