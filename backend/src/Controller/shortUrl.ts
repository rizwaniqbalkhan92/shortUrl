import express from 'express';
import {urlModel}  from '../models/shortUrl'


const createUrl=async (req:express.Request,res:express.Response)=>{
try{

    const {fulUrl}=req?.body
    const foundUrl= await urlModel.find({fulUrl});
    if(foundUrl.length > 0){
        res.status(409).send({data:foundUrl})
    }
    else{
        const shortUrl= await urlModel.create({fulUrl});
        res.status(201).send(shortUrl);

    }
}
catch(error){
    res.status(500).send({"message":"Something Went Wrong"})

}

}
const getAllUrl=async (req:express.Request,res:express.Response)=>{
try{
    const allUrls= await urlModel.find();
    if(allUrls.length <0 ){
        res.status(404).send({"message":"Not Found"});

    }
    else{
        res.status(200).send({data:allUrls})
    }
}
catch(error){
    res.status(500).send({"message":"Something Went Wrong"})
}
   
}
const deleteUrl=async (req:express.Request,res:express.Response)=>{
    try{
        console.log("REQUEST====>>>",req.params.id)

        const data = await urlModel.findByIdAndDelete({_id:req?.params?.id})  
    
        if(data){
            res.status(404).send({"message":"We have deleted Successfully"});
    
        }
        
    }
    catch(err){
        res.status(500).send({"message":"Internal Server Error"})
    }
}
const getUrl=async (req:express.Request,res:express.Response)=>{
try{

    const shorturl = await urlModel.findOne({_id:req?.params?.id})  

    if(!shorturl){
        res.status(404).send({"message":"Not Found Full Url"});

    }
    else{

        shorturl.click++;
        shorturl.save();
        res.redirect(`${shorturl.fulUrl}`)
        
    }
}
catch(err){
    res.status(500).send({"message":"Internal Server Error"})
}
}


export {createUrl,getUrl,getAllUrl,deleteUrl}