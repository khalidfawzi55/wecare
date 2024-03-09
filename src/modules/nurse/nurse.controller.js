import  {nurseModel}  from "../../../database/models/nurse.model.js"
import { addOne, deleteOne, getAllDocumnts, updateOne } from "../handler/factors.js"
import { catchError } from "../../utlis/CatchErorr.js"
import { AppError } from "../../utlis/AppErorr.js"

const addNurse=addOne(nurseModel)

const getAllNurses=catchError(async(req,res)=>{
    let result=await nurseModel.find()
     res.status(201).json({message:"success",result})
 })
 const getSomeNurses=catchError(async(req,res,next)=>{
    
    const{shift,gender,age,durationofstay,specialization}=req.body
    let result=await nurseModel.find(req.body)
     result && res.status(201).json({message:"sucess",result})
    
 })
const updateNurse=updateOne(nurseModel);
const deleteNurse=deleteOne(nurseModel);
 
export{
    addNurse,
    getAllNurses,
    updateNurse,
    deleteNurse,
    getSomeNurses
}