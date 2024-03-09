import {Schema,model} from "mongoose";

const subCategorySchema=new Schema({
    name:{
        type:String,
        unique:true,
        required:true,
        trim:true,
        minlength:[1,'too short category name']
    },
    descrapition:{
        type:String,
    },

   category:{
    type:Schema.ObjectId,
    required:true,
    ref:"category"
   }
},{timestamps:true})

export const subCategoryModel=model('subCategory',subCategorySchema)
