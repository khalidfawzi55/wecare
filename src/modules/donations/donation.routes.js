
import express  from "express";
import * as donation from "./donation.controller.js";

const donationRouter=express.Router()

donationRouter.route('/')
.post(donation.addDonation)
.get(donation.getAllDonations)


donationRouter.route('/:id')
.put(donation.updateDonation)
.delete(donation.deleteDonation)



export default donationRouter