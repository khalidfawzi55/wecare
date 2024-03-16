import {Schema,model} from "mongoose";


const DonationsSchema=new Schema({
    name:{
        type:String,
        required:true,
        trim:true,
    },

    email:{
        type:String,
       
        required:true,
        trim:true,
        
    },
   
  
    
    phone:{
        type:String,
        required:true,
    },
    Governorate:{
        type:String,
        required:true,
    },
    address:{
        type:String,
        required:true,
    },
    TypeOfDonation:{
        type:String,
        required:true,
    },
    DonationDetails:{
        type:String,
        required:true,
    }
   
   
},{timestamps:true})

export const donationModel=model('donation',DonationsSchema)
