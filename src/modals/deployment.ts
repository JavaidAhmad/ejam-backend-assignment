import mongoose from 'mongoose';

const deployment = mongoose.Schema({
    url: String,
    templateName: String,
    version: String,
    deployedAt: Date
})

export const Deployment = mongoose.model('deployment', deployment);