import mongoose from 'mongoose';

const templateSchema = mongoose.Schema({
    name: String,
    versions: [String]
})

export const Template = mongoose.model('template', templateSchema);