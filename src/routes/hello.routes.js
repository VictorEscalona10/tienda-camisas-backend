import { Router } from "express";
import helloController from "../controllers/hello.controller.js";

const router = Router()

router.get('/', helloController)

export default router 
