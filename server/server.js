import express from "express"
import {serve } from 'inngest/express';
import {inngest,functions} from "./inngest/index.js"
import dotenv from 'dotenv'
import { clerkMiddleware } from '@clerk/express'
import connectDB from "./config/mongo.js";
import connectCloudinary from "./config/cloudinary.js";
import {v2 as cloudinary} from 'cloudinary'
import productRouter from "./routes/productRoute.js";
import adminRouter from "./routes/adminRoute.js";
import cors from 'cors'
import cartRouter from "./routes/cartRoute.js";

dotenv.config();


const app = express();
const PORT = process.env.PORT;
connectDB();


app.use(express.json());
app.use(cors())
app.use(clerkMiddleware())


connectCloudinary();
cloudinary.config();

app.get('/',(req,res)=>{
    res.send('server running on port 3000')
})
app.use("/api/inngest",serve({client:inngest,functions}));
app.use('/api/product',productRouter);
app.use('/api/admin',adminRouter);
app.use('/api/cart',cartRouter);

console.log("Inngest mode:", process.env.INNGEST_DEV ? "DEV" : "CLOUD");

app.listen(PORT,()=>{
    console.log(`server running on http://localhost:${PORT}`);
})