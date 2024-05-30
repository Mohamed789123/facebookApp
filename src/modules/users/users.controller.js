import userModel from "../../../DB/models/user.model.js"

import commentModel from "../../../DB/models/comment.model.js"
import postModel from "../../../DB/models/post.model.js"
import bcrypt from "bcryptjs"

// export const getUsers = async (req, res, next) => {
//     const user = await userModel.findAll()
//     return res.json({ msg: "done", user })
// }


export const addUsers = async (req, res, next) => {
    const { userName, email, password } = req.body
    const users = await userModel.bulkCreate(req.body)
    return res.json({ msg: "done", users })
}






export const login = async (req, res, next) => {
    const { email, password } = req.body
    const loginUser = await userModel.findOne({
        where: { email, password }
    })
    return res.json({ msg: "done", loginUser })
}











export const getUserWithPostAndComments = async (req, res, next) => {
  const { userId, postId } = req.params;


    const user = await userModel.findOne({
      where: { id: userId },
    });

    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }

  
    const post = await postModel.findOne({
      where: { id: postId, userId: userId },
    });

    if (!post) {
      return res.status(404).json({ msg: "Post not found" })
    }

   
    const comments = await commentModel.findAll({
      where: { postId: postId },
    });

    
    return res.json({ msg: "done", user, post, comments })

}




// ========================================================================================================

// export const addUser = async (req, res, next) => {
//     const { userName, email, password } = req.body

    
//     const salt = await bcrypt.genSalt(4);

   
//     const hashedPassword = await bcrypt.hash(password, salt);

    
//     const newUser = await userModel.create({ userName, email, password: hashedPassword });

//     return res.json({ msg: "done", newUser });
// }


// export const signIn = async (req, res, next) => {
//     const { email, password } = req.body

//     // Find the user with the provided email
//     const user = await userModel.findOne({ where: { email } });

//     if (!user) {
//         return res.status(404).json({ msg: "User not found" });
//     }

//     // Compare the provided password with the stored hashed password
//     const isMatch = await bcrypt.compare(password, user.password);

//     if (!isMatch) {
//         return res.status(401).json({ msg: "Invalid credentials" });
//     }

//     return res.json({ msg: "done", user });
// }

// ========================================================================================================











