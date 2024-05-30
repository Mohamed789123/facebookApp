import { Router } from "express";
import * as PC from "./posts.controller.js"
const router = Router()

// router.get("/", PC.getPosts)
router.post("/addPosts", PC.addPosts)
router.get("/getPosts", PC.getposts)
router.put("/:id", PC.updatePost)
router.delete("/:id", PC.deletePost)
router.put("/update/:id", PC.updated)
router.get("/getPost/:id", PC.getPost)










export default router