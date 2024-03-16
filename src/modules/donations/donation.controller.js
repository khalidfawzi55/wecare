import  {donationModel}  from "../../../database/models/Donations.model.js"

import { addOne, deleteOne, getAllDocumnts, updateOne } from "../handler/factors.js"

import _ from "lodash"





const catchError=(fn)=>{
    return (req,res,next)=>{
        fn(req,res,next).catch((err)=>{
            res.json(err)
        })
    }
}

const getAllDonations=catchError(async(req,res)=>{
    
    let donation=await donationModel.find()
     res.status(201).json({message:"success",donation})
 });

 const addDonation=catchError(async(req,res,next)=>{
    
    const donation=new donationModel(req.body)
    await donation.save()
    res.status(201).json({message:"success",donation})
    
})

const updateDonation=updateOne(donationModel);
const deleteDonation=deleteOne(donationModel);
 


 


export{
   addDonation,
   getAllDonations,
   updateDonation,
   deleteDonation
}