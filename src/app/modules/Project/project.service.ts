import { HttpError } from "../../errors/HttpError";
import { TProject } from "./project.interface";
import { Project } from "./project.model";

const createProject = async (payload: TProject) => {
    const createdProject = await Project.create(payload);
    return createdProject;
};

const getAllProjects = async () => {
    const projects = await Project.find();
    if (projects.length === 0) {
        throw new HttpError(404, "Projects were not found in the database")
    }
    return projects;
}

const getProjectById = async (id: string) => {
    const project = await Project.findById(id);
    if (!project) {
        throw new HttpError(404, "The requested project could not be found.")
    }
    return project;
}

const updateProjectById = async (id: string, payload: Partial<TProject>) => {
    const updatedProject = await Project.findOneAndUpdate({ _id: id, isDeleted: false }, payload, { new: true, runValidators: true })
    if (!updatedProject) {
        throw new HttpError(404, "The requested project could not be found.")
    }
    return updatedProject;
}

export const ProjectServices = {
    createProject,
    getAllProjects,
    getProjectById,
    updateProjectById,
}