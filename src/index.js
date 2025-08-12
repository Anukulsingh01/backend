// require('dotenv').config({path:'./env'})
import dotenv from "dotenv"
import connectDB from "./db/index.js";

dotenv.config({
    path:'./env'
})

// function connectDB(){
   
// }

// connectDB()


connectDB()


// Approach 1;

/*
import express from "express"
const app= express()

;(async()=>{
   try{
     await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
     app.on("error",()=>{
        console.log("ERR:",error);
        throw error;
     })

     app.listen(process.env.PORT,()=>{
        console.log(`App is listening on port ${process.env.PORT}`);
     })
   }
   catch(error){
    console.log("Error:",error);
   }
})()

*/