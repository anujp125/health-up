import dotenv from "dotenv";
import connectDB from "./db/index.js";


dotenv.config({
  path:'./env'
})

connectDB()
.then(() => {
  app.listen(process.env.PORT || 8000, () => {
    console.log(`Server is running at port : ${process.env.PORT}`);
  })
})
.catch((err) => {
  console.log("MONGODB connection failed! ", err);
})





/*
1st approach to connect to DB and also initiated app with express in one place.
*/



/*
import mongoose from "mongoose";
import {DB_NAME} from "./constants.js";
import express from "express";
const app = express()


( async () =>{
  try {
    mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    
    
    app.on("error", (error) =>{
      console.log("ERR:", error);
      throw error
    })
    
   app.listen(process.env.PORT, ()=>{
     console.console.log(`App is listening on port ${process.env.PORT}`);
   })
   
   
  } catch (error) {
    console.error("ERROR:", error)
    throw error
  }
})()
*/

/*
2nd approach to connect to DB 

mainly working in src>db>index.js
*/

