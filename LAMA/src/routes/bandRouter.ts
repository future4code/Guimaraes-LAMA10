import express from "express";
import { BandsController } from "../controller/BandsController";


export const bandRouter = express.Router();

const bandsController = new BandsController();

bandRouter.post("/insert", bandsController.create);
bandRouter.get("/:id", bandsController.getBandById)