import express from "express"
import connectionDB from "./DB/connectionDB.js"
import userRouter from "./src/modules/users/user.routes.js"
import postsRouter from "./src/modules/posts/posts.routes.js"
import commentRouter from "./src/modules/comments/comments.routes.js"

const port = process.env.port || 5000
const app = express()



app.use(express.json())
app.use("/users", userRouter)
app.use("/posts", postsRouter)
app.use("/comments", commentRouter)
connectionDB()


app.get("/", (req, res, next) => {
    res.send("Welcome to my server")
})



app.use("*", (req, res, next) => {
    return res.json({ msg: "404 not found" })
})

app.listen(port, () => {
    console.log("Server is running on port 5000")
})