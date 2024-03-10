
import express  from "express";
import * as tool from "./toolsOrder.controller.js";

const toolRouter=express.Router()

toolRouter.route('/')
.post(tool.orderTool)
.get(tool.getAllToolOrders)

toolRouter.route('/:id')
.put(tool.updateToolOrder)
.delete(tool.deleteToolOrder)


export default toolRouter
