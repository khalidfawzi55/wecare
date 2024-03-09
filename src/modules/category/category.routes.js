
import express  from "express";
import * as category from "./category.controller.js";
import subCategoryRouter from "../subCategory/subCategory.routes.js";

const categoryRouter=express.Router()

categoryRouter.use('/:categoryId/subcategories',subCategoryRouter)
categoryRouter.route('/')
.post(category.addCategory)
.get(category.getAllCategories)

categoryRouter.route('/:id')
.put(category.updateCategory)
.delete(category.deleteCategory)



export default categoryRouter