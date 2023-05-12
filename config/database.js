import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect("")
        console.log("connect DB");
    }catch (err){
        console.log(err.message)
    }
}

export default connectDB;