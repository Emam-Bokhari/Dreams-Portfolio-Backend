import express from 'express';
import { ProjectControllers } from './project.controller';

const router = express.Router();

router.post('/', ProjectControllers.createProjectController);

router.get('/', ProjectControllers.getAllProjectsController);

router.get('/:id', ProjectControllers.getProjectController);

router.patch('/:id', ProjectControllers.updateProjectController);

router.delete('/:id', ProjectControllers.deleteProjectController);

export const ProjectRoutes = router;
