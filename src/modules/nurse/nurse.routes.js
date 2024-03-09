
import express  from "express";
import * as nurse from "./nurse.controller.js";

const nurseRouter=express.Router()

nurseRouter.route('/')
.post(nurse.addNurse)
.get(nurse.getAllNurses)



nurseRouter.route('/filternurse')
.get(nurse.getSomeNurses)

nurseRouter.route('/:id')
.put(nurse.updateNurse)
.delete(nurse.deleteNurse)



export default nurseRouter