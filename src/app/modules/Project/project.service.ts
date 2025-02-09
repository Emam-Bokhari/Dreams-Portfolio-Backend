import { TProject } from "./project.interface";
import { Project } from "./project.model";

const createProject = async (payload: TProject) => {
    const createdProject = await Project.create(payload);
    return createdProject;
};

export const ProjectServices = {
    createProject,
}