import mongoose from "mongoose"
const userSchems = mongoose.Schema({
    name : {
        type : String,
        required : true,
        trim: true,
    },
    email : {
        type : String,
        required : true,
        trim: true,
    },
    call : {
        type : String,
        trim: true,
    },
    gender : {
        type : String,
        enum : ["Male", "Female"]
    },
    photo : {
        type : String,
    },
    status : {
        type : Boolean,
        default : true,
    },
    trash : {
        type : Boolean,
        default : false,
    }
},{
    timestamps : true
})

export default mongoose.models.User || mongoose.model("User", userSchems)