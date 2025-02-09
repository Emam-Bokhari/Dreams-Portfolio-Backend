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

const getProjectController = asyncHandler(async (req, res) => {
    const id = req.params.id;
    const project = await ProjectServices.getProjectById(id);
    sendResponse(res, {
        success: true,
        statusCode: 200,
        message: "Project is retrieving successfully",
        data: project,
    })
})

const updateProjectController = asyncHandler(async (req, res) => {
    const id = req.params.id;
    const updatedPayload = req.body;
    const updatedProject = await ProjectServices.updateProjectById(id, updatedPayload);
    sendResponse(res, {
        success: true,
        statusCode: 200,
        message: "Project is updated successfully",
        data: updatedProject,
    })
})

export const ProjectControllers = {
    createProjectController,
    getAllProjectsController,
    getProjectController,
    updateProjectController,
}