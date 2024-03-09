
import { nurseOrderModel } from "../../../database/models/OrderModel.js";

import { AppError } from "../../utlis/AppErorr.js"
import { catchError } from "../../utlis/CatchErorr.js"
const addOrderNurse=catchError(async(req,res,next)=>{
   
    const orderNurse=new nurseOrderModel(req.body)
    await orderNurse.save()
    res.status(201).json({message:"success",orderNurse})
})

 const getAllOrderNurses= catchError(async(req,res)=>{
    let result=await nurseOrderModel.find()
     res.status(201).json({message:"success",result})
 })

 const updateOrderNurse=catchError(async(req,res,next)=>{
    const{id}=req.params
    const{name}=req.body
    let document=await nurseOrderModel.findByIdAndUpdate(id,req.body,{new:true})
    !document && next(new AppError('document not found',404))
     document && res.status(201).json({message:"sucess",document})
 })

const deleteOrderNurse=catchError(async(req,res,next)=>{
    const{id}=req.params
   
    const document=await nurseOrderModel.findByIdAndDelete(id)
     !document && next(new AppError('document not found',404))
     document && res.status(201).json({message:"sucess",document})
 })
export{
    addOrderNurse,
    getAllOrderNurses,
     updateOrderNurse,
     deleteOrderNurse
}