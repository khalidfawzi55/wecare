
import express  from "express";
import * as tool from "./toolsOrder.controller.js";

const toolRouter=express.Router()

toolRouter.route('/')
.post(tool.orderTool)
.get(tool.getAllToolOrders)


export default toolRouter