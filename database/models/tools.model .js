import {Schema,model} from "mongoose";

const toolsSchema=new Schema({
    name:{
        type:String,
       
        trim:true,
    },
       
    tradeMark:{
        type:String,
        
       
    },
    Available:{
        type:Number,
        required:true,
    
    },
    Purchased:{
        type:Number,
        required:true,
        
    },
    material:{
        type:String,
        required:true,
       
    },
    SeatWidth:{
        type:String,
        required:true,
    },
    Capacity:{
        type:Number,
        required:true,
    },
    madeIn:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    }
    
    

   
},{timestamps:true})

export const toolsModel=model('tools',toolsSchema)
