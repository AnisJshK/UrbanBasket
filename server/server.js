import express from "express"
import dotenv from 'dotenv'
import connectDB from "./config/mongo.js";
import connectCloudinary from "./config/cloudinary.js";

const app = express();
app.use(express.json());
dotenv.config();
const PORT = process.env.PORT

connectDB();
connectCloudinary();

app.get('/',(req,res)=>{
    res.send('Hello world')
})

app.listen(3000)