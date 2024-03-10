import {Schema,model} from "mongoose";

const toolsOrderSchema=new Schema({
    name:{
        type:String,
       
        trim:true,
    },
    tradeMark:{
        type:String
    },
    price:{
        type:Number,
        required:true
    },
    image:{
        type:String,
        required:true
    }
},{timestamps:true})

export const toolsOrderModel=model('toolsOrder',toolsOrderSchema)