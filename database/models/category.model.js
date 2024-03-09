import {Schema,model} from "mongoose";

const categorySchema=new Schema({
    name:{
        type:String,
        unique:true,
        required:true,
        trim:true,
        minlength:[2,'too short category name']
    },
   
    image:{
        type:String,
       
    }
},{timestamps:true})

export const categoryModel=model("category",categorySchema)
