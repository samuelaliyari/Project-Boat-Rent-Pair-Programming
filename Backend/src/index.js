import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import multer from "multer";
import dotenv from "dotenv";
import morgan from "morgan";

dotenv.config();

const PORT = process.env.PORT || 3001;
const URI = process.env.URI;


const app = express();

app.use(cors());
app.use(morgan("dev"));








const runServer = async () => {
    console.log('Starting app...');
    app.listen(PORT, console.log("app RUNNING @ Port: " + PORT));
}; 

const connectDatabase = async () => {
    try {
        console.log('Connecting to BoatBooking database...');
        await mongoose.connect(URI, { dbName: 'BoatBooking'});
        console.log(('Connection to database succeeded!'));
    } catch (err) {
        console.log('Connection to database failed: ', err);
    };
};

connectDatabase()
    .then(runServer)
    .catch(err => console.log(err));



