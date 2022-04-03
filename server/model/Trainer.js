import mongoose from "mongoose";

const Trainer = new mongoose.Schema({
    name: {type:String, required:true},
    firstName: {type:String, required:true},
    lastName: {type:String, required:true},
    age: {type:String, required:true},
    stage: {type:String, required:true}
});

export default mongoose.model("Trainer", Trainer);