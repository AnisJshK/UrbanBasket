import mongoose, { mongo } from "mongoose";
import { type } from "node:os";


const userSchema = new mongoose.Schema({
    _id:{type:String,required:true},
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    image:{type:String,required:true},
    cartData:{type:Object,default:{}},

},{minimize:false})

const userModel = mongoose.models.user || mongoose.model('user',userSchema);
export default userModel