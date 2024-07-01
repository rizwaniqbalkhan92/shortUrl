import mongoose from "mongoose";
import { nanoid } from "nanoid";



const shortUrlSchema= new mongoose.Schema({
    fulUrl:{
        type:String,
        required:true,

    },
    shortUrl:{
        type:String,
        required:true,
        default:nanoid().substring(0,10)
        
    },
    click:{
        type:Number,
        default:0
    }
},{
    timestamps:true
})

const urlModel=  mongoose.model('shortUrl',shortUrlSchema);
export {urlModel} 