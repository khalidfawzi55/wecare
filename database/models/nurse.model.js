import {Schema,model} from "mongoose";

const nurseSchema=new Schema({
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
        required:true,
    },
    costOfHour:{
        type:Number,
        required:true
    },
    costOfDay:{
        type:Number,
        required:true
    },
    subCategory:{
        type:Schema.ObjectId,
        required:true,
        ref:"subCategory"
       },
    specialization:{
        type:String,
        required:true,
    },
    durationofstay:{
        type:String,
        required:true,
    }

   
},{timestamps:true})

export const nurseModel=model('nurse',nurseSchema)
