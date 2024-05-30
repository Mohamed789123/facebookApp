import { Router } from "express"
const router = Router()

import * as UC from "./users.controller.js"


// router.get("/", UC.getUsers)
router.post("/add", UC.addUsers)
router.get("/login", UC.login)
router.get("/specific/:userId/:postId", UC.getUserWithPostAndComments)
// router.get("/signIn", UC.signIn)
// router.get("/", UC.addUser)













export default router