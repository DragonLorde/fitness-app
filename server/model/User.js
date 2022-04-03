import mongoose from "mongoose";

const User = new mongoose.Schema({
    name: {type:String, required:true},
    firstName: {type:String, required:true},
    age: {type:String, required:true},
})

export default mongoose.model("User" , User);