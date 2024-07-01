import mongoose from "mongoose";


const dbConnection=async()=>{

    try{

        const connect= await mongoose.connect(`${process.env.MONGODB_CONNECTION}`);
        console.log("DB_CONNECTED",connect.connection.host);
    }
    catch(error){
        console.log("ERROR==>>",error)
    }
}


export default dbConnection