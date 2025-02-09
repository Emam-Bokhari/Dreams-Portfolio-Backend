import { asyncHandler } from "../../utils/global/asyncHandler";
import { sendResponse } from "../../utils/global/sendResponse";
import { ProjectServices } from "./project.service";

const createProjectController = asyncHandler(async (req, res) => {
    const projectPayload = req.body;
    const createdProject = await ProjectServices.createProject(projectPayload);
    sendResponse(res, {
        success: true,
        statusCode: 201,
        message: "Project is created successfully",
        data: createdProject,
    })
});

const getAllProjectsController = asyncHandler(async (req, res) => {
    const projects = await ProjectServices.getAllProjects();
    sendResponse(res, {
        success: true,
        statusCode: 200,
        message: "Projects are retrieving successfully",
        data: projects,
    })
})

export const ProjectControllers = {
    createProjectController,
    getAllProjectsController,
}