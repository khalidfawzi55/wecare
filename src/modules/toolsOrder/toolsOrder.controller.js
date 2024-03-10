import  {toolsOrderModel}  from "../../../database/models/toolsOrder.model.js"
import  {toolsModel}  from "../../../database/models/tools.model .js"
import {otpModel} from '../../../database/models/OtpModel.js'
import jwt from "jsonwebtoken"
import _ from "lodash"
import axios from "axios"
import bcrypt from 'bcrypt'
import otpGenerator from 'otp-generator'
import { addOne, deleteOne, getAllDocumnts, updateOne } from "../handler/factors.js"




const catchError=(fn)=>{
    return (req,res,next)=>{
        fn(req,res,next).catch((err)=>{
            res.json(err)
        })
    }
}

const getAllToolOrders=catchError(async(req,res)=>{
    
    let tool=await toolsOrderModel.find()
     res.status(201).json({message:"success",tool})
 });

 const orderTool=catchError(async(req,res,next)=>{
    let isTool=await toolsModel.findOne({tradeMark:req.body.tradeMark})
    if(!isTool)return res.status(409).json({message:"not found"}) 
    const tool=new toolsOrderModel(req.body)
    await tool.save()
    res.status(201).json({message:"success",tool})
    
})

const updateToolOrder=updateOne(toolsOrderModel);
const deleteToolOrder=deleteOne(toolsOrderModel);
 


const protectedRoutes=catchError(async(req,res,next)=>{

})
 


export{
    orderTool,
    getAllToolOrders,
    protectedRoutes,
    updateToolOrder,
    deleteToolOrder
}
