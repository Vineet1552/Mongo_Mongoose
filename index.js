import mongoose from "mongoose";
import express from "express";
import routes from "./routes/routes.js"; // Correct the path to your routes file

const app = express();
const port = 3000;
app.use(express.json());

app.use('/', routes); // Use the routes from the separate file

app.listen(port, async () => {
    try {
        await mongoose.connect("mongodb://0.0.0.0:27017/studentdata");
        console.log(`listening on port number: ${port}`);
    } catch (error) {
        console.error("Mongoose connection error", error);
        process.exit(1); // Exit the process if there is an error connecting to MongoDB
    }
});
