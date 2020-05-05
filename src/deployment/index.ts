import express from 'express';
import { deployments, createDeployment, deleteDeployment } from './controller/deployment-controller';
import { templates } from './controller/template-controller';
const api = express();

// You may add api specific middlewares here
api.get('/templates', templates)
api.get('/deployments', deployments);
api.post('/deployments/create', createDeployment);
api.delete('/deployments', deleteDeployment);

export default api;