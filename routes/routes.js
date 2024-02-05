import express from "express";
import {
    findUser,
    deleteUser,
    getOneData,
    sendData,
    findOneUpdate,
} from "../methods/methods.js"; // Correct the path to your methods file
import dataValidator from "./validators"; // Correct the path to your validators file

const router = express.Router();

router.get('/', findUser);
router.get('/:_id', getOneData);
router.post('/post', sendData);
router.put('/put/:_id', findOneUpdate);
router.delete('/delete/:_id', deleteUser);

module.exports = router;
