import slugify from "slugify"
import { AppError } from "../../utlis/AppErorr.js"
import { catchError } from "../../utlis/CatchErorr.js"
import { nurseModel } from "../../../database/models/nurse.model.js"

export const addOne=(model)=>{
    return catchError(async(req,res,next)=>{
        let nurse=await nurseModel.findOne({phone:req.body.phone})
    if(nurse)return res.status(409).json({message:"already exists"}) 
        const document=new model(req.body)
        await document.save()
        res.status(201).json({message:"success",document})
    })
}

export const deleteOne=(model)=>{
    return catchError(async(req,res,next)=>{
        const{id}=req.params
       
        const document=await model.findByIdAndDelete(id)
         !document && next(new AppError('document not found',404))
         document && res.status(201).json({message:"sucess",document})
     })
}
export const updateOne=(model)=>{
    return catchError(async(req,res,next)=>{
        const{id}=req.params
        const{name}=req.body
        let document=await model.findByIdAndUpdate(id,req.body,{new:true})
        !document && next(new AppError('document not found',404))
         document && res.status(201).json({message:"sucess",document})
     })
    }

export const getAllDocumnts=(model)=>{
    return catchError(async(req,res)=>{
        let documents=await model.find()
         res.status(201).json({message:"success",documents})
     })
}

