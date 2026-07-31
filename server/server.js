import express from "express"
import {serve } from 'inngest/express';
import {inngest,functions} from "./inngest/index.js"
import dotenv from 'dotenv'
import { clerkMiddleware } from '@clerk/express'
import connectDB from "./config/mongo.js";
import connectCloudinary from "./config/cloudinary.js";

dotenv.config();


const app = express();
const PORT = process.env.PORT;
connectDB();


app.use(express.json());
app.use(clerkMiddleware())


connectCloudinary();

app.get('/',(req,res)=>{
    res.send('Hello world')
})
app.use("/api/inngest",serve({client:inngest,functions}));
console.log("Inngest mode:", process.env.INNGEST_DEV ? "DEV" : "CLOUD");

app.listen(PORT,()=>{
    console.log(`server running on http://localhost:${PORT}`);
})