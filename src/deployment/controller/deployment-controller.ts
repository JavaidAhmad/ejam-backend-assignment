import express from 'express';
import { Deployment } from '../../modals/deployment';
import { Template } from '../../modals/template';



/**
 * @description fetch all deployments
 * @param req Express request
 * @param res Express Response
 */
export const deployments = async (req: express.Request, res: express.Response) => {
    try {
        const data = await Deployment.find();
        res.send({ data })

    } catch (error) {
        res.send(error)
    }
}


/**
 * @description Create particular deployment
 * @param req Express request
 * @param res Express Response
 */
export const createDeployment = async (req: express.Request, res: express.Response) => {
    try {
        const data = req.body;
        if (data) {
            const deployment = new Deployment(data);
            const result = await deployment.save();
            res.send({ result });
        } else throw "Body data required";
    } catch (error) {
        res.send(error)
    }
}


/**
 * @description Delete particular deployment
 * @param req Express request
 * @param res Express Response
 */
export const deleteDeployment = async (req: express.Request, res: express.Response) => {
    try {
        const id = req.query.id;
        if (id) {
            let data = await Deployment.deleteOne({ _id: id });
            data['deletedId'] = id
            res.send({ data });
        } else throw "id is required!";
    } catch (error) {
        res.send(error)
    }
}