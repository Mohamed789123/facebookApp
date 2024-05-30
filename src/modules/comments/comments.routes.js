import { Router } from "express";
const router = Router()
import * as CC from "./comments.controller.js"





router.get("/", CC.getComments)
router.post("/addComments", CC.addComments)
router.get("/getAll", CC.getAllComments)
router.put("/:id", CC.updateComments)
router.delete("/:id", CC.deleteComment)






export default router