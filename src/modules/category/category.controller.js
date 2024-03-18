import  {categoryModel}  from "../../../database/models/category.model.js"
import { addOne, deleteOne, getAllDocumnts, updateOne } from "../handler/factors.js"
import { catchError } from "../../utlis/CatchErorr.js"

const addCategory=addOne(categoryModel)

const getAllCategories= getAllDocumnts(categoryModel)
    
const updateCategory=updateOne(categoryModel);
const deleteCategory=deleteOne(categoryModel);
 
export{
    addCategory,
    getAllCategories,
    updateCategory,
    deleteCategory
}
