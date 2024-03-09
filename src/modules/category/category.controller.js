import  {categoryModel}  from "../../../database/models/category.model.js"
import { addOne, deleteOne, getAllDocumnts, updateOne } from "../handler/factors.js"
import { catchError } from "../../utlis/CatchErorr.js"

const addCategory=addOne(categoryModel)

const getAllCategories= catchError(async(req,res)=>{
    const page_limit=2
    const page_number=req.query.page*1||1
    const skip=(page_number-1)*page_limit
    let filter={}
    if(req.params.categoryId){
        filter={category:req.params.categoryId}
    }
        let result=await categoryModel.find(filter).skip(skip).limit(page_limit)
         res.status(201).json({page:page_number,message:"success",result})
     })
    
const updateCategory=updateOne(categoryModel);
const deleteCategory=deleteOne(categoryModel);
 
export{
    addCategory,
    getAllCategories,
    updateCategory,
    deleteCategory
}