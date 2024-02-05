import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import multer from "multer";
import dotenv from "dotenv";
import morgan from "morgan";


dotenv.config();

const PORT = process.env.PORT || 3001;


const app = express();

app.use(cors());
app.use(morgan("dev"));
















app.listen(PORT, console.log("app RUNNING @ Port: " + PORT));