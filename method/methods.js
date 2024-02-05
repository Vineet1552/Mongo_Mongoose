// // method/methods.js

// import { Data } from "./Model/main.js";


// async function findUser  (req, res) {
//     try{
//         const user = await Data.find({});
//         return res.json({user});
//     }
//     catch(error) {
//         console.error("this is an error", error);
//         res.status(500).send("internal error");
//     }
// }


// // app.get('/:_id', async(req,res)
// async function getOneData (req,res) {
//     try {
//         let data =  await Data.find(req.params);
//         res.send(data);
//     }
//     catch(error) {
//         console.error("this is an error", error);
//         res.status(500).send("internal error");
//     }
// };

// //validation in creation and updatin


// // app.post('/post', async(req, res)
// async function sendData (req, res) {
//     try{
//         const validation = await dataValidator.validateAsync(req.body);
//         const {firstName,lastName,studentEmail,dailCode,studentPhone} = validation;
//         await Data.create({
//             firstName,
//             lastName,
//             studentEmail,
//             dailCode,
//             studentPhone
//         })
//         res.send("success");
        
//     }
//     catch(error) {
//         console.error("this is an error", error);
//         res.status(500).send(error.message);
//     }
// };


// //this is for particular updation in DB
// // app.put('/put', async(req, res) => {
// //     const id = await Data.find(req.params)
// //     try {
// //         const filter = {firstName:req.body.firstName};
// //         const updateData = {
// //             studentPhone:req.body.studentPhone,
// //             studentEmail:req.body.studentEmail
// //         }
// //         await Data.findOneAndUpdate(filter, updateData);
// //         res.json({
// //             msg: "updated"
// //         })
// //     }
// //     catch(error) {
// //         console.error("This is an error", error);
// //         res.status(500).send("Server error");
// //     }
// // });


// // put with the id
// // app.put('/put/:_id', async (req, res)
// async function findOneUpdate (req, res) {
//     try {
//         // const filter = req.params;
//     let data = await Data.findByIdAndUpdate(req.params,{$set:req.body});
//     res.send(data);
//     }    
//     catch(error) {
//         console.error("this is an error", error);
//         res.status(500).send("internal error");
//     }
// };



// // app.delete('/delete/:_id', async (req, res) => 
// async function deleteUser (req, res) {
//     try {
//         const id = req.params;
//         let data = await Data.deleteOne(id);
//         res.send("hello");
//     }
//     catch(error) {
//         console.error("This is an error", error);
//         res.status(500).send("Server error");
//     }
// };


// module.exports = {
//     findUser,
//     deleteUser,
//     getOneData,
//     sendData,
//     findOneUpdate,
// }
//new 


import { Data } from "../Model/main.js"; // Correct the path to your model file
import dataValidator from "./validators"; // Correct the path to your validators file

async function findUser(req, res) {
    try {
        const user = await Data.find({});
        return res.json({ user });
    } catch (error) {
        console.error("Error in findUser", error);
        res.status(500).send("Internal error");
    }
}

async function getOneData(req, res) {
    try {
        let data = await Data.findById(req.params._id);
        res.send(data);
    } catch (error) {
        console.error("Error in getOneData", error);
        res.status(500).send("Internal error");
    }
}

async function sendData(req, res) {
    try {
        const validation = await dataValidator.validateAsync(req.body);
        const { firstName, lastName, studentEmail, dailCode, studentPhone } = validation;
        await Data.create({
            firstName,
            lastName,
            studentEmail,
            dailCode,
            studentPhone,
        });
        res.send("Success");
    } catch (error) {
        console.error("Error in sendData", error);
        res.status(500).send(error.message);
    }
}

async function findOneUpdate(req, res) {
    try {
        let data = await Data.findByIdAndUpdate(req.params._id, { $set: req.body }, { new: true });
        res.send(data);
    } catch (error) {
        console.error("Error in findOneUpdate", error);
        res.status(500).send("Internal error");
    }
}

async function deleteUser(req, res) {
    try {
        const id = req.params._id;
        let data = await Data.findByIdAndDelete(id);
        res.send("Deleted");
    } catch (error) {
        console.error("Error in deleteUser", error);
        res.status(500).send("Internal error");
    }
}

module.exports = {
    findUser,
    deleteUser,
    getOneData,
    sendData,
    findOneUpdate,
};
