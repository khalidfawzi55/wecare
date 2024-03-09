import  {subCategoryModel}  from "../../../database/models/subCategory.model.js"
import { addOne, deleteOne, getAllDocumnts, updateOne } from "../handler/factors.js"
import { AppError } from "../../utlis/AppErorr.js"
import { catchError } from "../../utlis/CatchErorr.js"

const addSubCategory=addOne(subCategoryModel)
const getAllSubCategories= catchError(async(req,res)=>{
    const page_limit=2
    const page_number=req.query.page*1||1
    const skip=(page_number-1)*page_limit
    let filter={}
    if(req.params.categoryId){
        filter={category:req.params.categoryId}
    }
        let result=await subCategoryModel.find(filter).skip(skip).limit(page_limit)
         res.status(201).json({page:page_number,message:"success",result})
     })
const updateSubCategory=updateOne(subCategoryModel);
const deleteSubCategory=deleteOne(subCategoryModel);
 
export{
    addSubCategory,
    getAllSubCategories,
    updateSubCategory,
    deleteSubCategory
}