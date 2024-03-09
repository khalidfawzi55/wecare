
import express  from "express";
import * as nurseOrder from "./nurseOrder.controller.js";

const nurseOrderRouter=express.Router()

nurseOrderRouter.route('/')
.post(nurseOrder.addOrderNurse)
.get(nurseOrder.getAllOrderNurses)

nurseOrderRouter.route('/:id')
.put(nurseOrder.updateOrderNurse)
.delete(nurseOrder.deleteOrderNurse)






export default nurseOrderRouter