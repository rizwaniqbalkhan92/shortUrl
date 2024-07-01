import express, { json } from 'express';
import dotenv from 'dotenv';
import dbConnection from './config/dbConnection';
import cors from 'cors';
import shortsUrl from './routes/shortUrl'
dotenv.config()
const app= express();
const PORT =  process.env.PORT || 5000 

app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use('/api/',shortsUrl);

app.use(cors({
    origin:`${process.env.LOCAL_URL}`,
    credentials:true
}))
app.listen(5000,()=>{
    console.log("Server Runing Successfully....!!!"+PORT);
    dbConnection()

})


app.get('/hello',(req,res)=>{

    res.send({message:"Hello World"});

})




 