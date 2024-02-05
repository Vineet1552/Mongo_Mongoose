// model/main.js

import mongoose from "mongoose";
const studentSchema = new mongoose.Schema({
    firstName: {
        type: String,
        // required: true
    },
    lastName: {
        type: String,
        // required: true
    },
    studentEmail: {
        type: String,
        // required: true
    },
    dailCode: {
        type: Number,
        // required: true
    },
    studentPhone: {
        type: Number,
        // required: true
    }
})

export const Data = mongoose.model('StudentDB', studentSchema);