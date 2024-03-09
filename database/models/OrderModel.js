import {Schema,model} from "mongoose";

const nurseOrderSchema=new Schema({
    name:{
        type:String,
       
        trim:true,
    },
       
    phone:{
        type:String,
        unique:true,
       
    },
    age:{
        type:Number,
        required:true,
    
    },
    gender:{
        type:String,
        required:true,
        
    },
    shift:{
        type:String,
        required:true,
        enum:[12,24]
    },
    company:{
        type:String,
        required:true,
    },
    address:{
        type:String,
       
    },
    costOfHour:{
        type:Number,
       
    },
    costOfDay:{
        type:Number,
        
    },
   
    specialization:{
        type:String,
        required:true,
    },
    durationofstay:{
        type:String,
        required:true,
    },
    
       phoneOfUser:{
        type:String,
        required:true,
       },
       addressOfUser:{
        type:String,
        required:true,
       },
},{timestamps:true})

export const nurseOrderModel=model('nurseOrder',nurseOrderSchema)
