import mongoose from "mongoose";


const connectToDB=()=>{
    try{
        mongoose.connect(process.env.MONGODB_URI||"")
        console.log("DB Connected")
    }
    catch(e){
        console.log(e)
    }
}


export default connectToDB