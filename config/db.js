import mongoose from "mongoose"

const connectMongoDB = async () =>{
    try {
        const connect = await mongoose.connect(process.env.MONGO)
        console.log("MongoDB connected.");
    } catch (error) {
        throw new Error("User data Invalid!")
    }
    
}


export default connectMongoDB;