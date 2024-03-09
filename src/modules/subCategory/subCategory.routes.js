
import express  from "express";
import * as subcategory from "./subCategory.controller.js";

const subCategoryRouter=express.Router()

subCategoryRouter.route('/')
.post(subcategory.addSubCategory)
.get(subcategory.getAllSubCategories)

subCategoryRouter.route('/:id')
.put(subcategory.updateSubCategory)
.delete(subcategory.deleteSubCategory)



export default subCategoryRouter