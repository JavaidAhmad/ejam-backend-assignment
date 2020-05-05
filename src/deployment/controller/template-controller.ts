import express from 'express';
import { Template } from '../../modals/template';


/**
 * @description fetch all templates
 * @param req Express request
 * @param res Express Response
 */
export const templates = async (req: express.Request, res: express.Response) => {
    try {
        let data = await Template.find();
        res.send({ data })

    } catch (error) {
        res.send(error)
    }
}