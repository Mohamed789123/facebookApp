import postModel from "../../../DB/models/post.model.js"
import userModel from "../../../DB/models/user.model.js"




// export const getPosts = async (req, res, next) => {
//     const posts = await postModel.findAll()
//     return res.json({ msg: "done", posts })
// }

export const addPosts = async (req, res, next) => {
    const { title, content, userId } = req.body
    const newPost = await postModel.bulkCreate(req.body)
    return res.json({ msg: "done", newPost })
}
export const getposts = async (req, res, next) => {
    const posts = await postModel.findAll()
    return res.json({ msg: "done", posts })
}


export const updatePost = async (req, res, next) => {
    const { id } = req.params
    const { content } = req.body
    const update = await postModel.update({ content }, { where: { id } })
    if (!update[0]) {
        console.log("post not found");
    }
    return res.json({ msg: "done" })
}


export const deletePost = async (req, res, next) => {
    const { id } = req.params
    const deleted = await postModel.destroy({ where: { id } })
    return res.json({ msg: "done", deleted })
}







export const updated = async (req, res, next) => {
    const { id } = req.params;
    const { content, userId } = req.body;


    const post = await postModel.findOne({ where: { id } });
    if (post.userId !== userId) {
        return res.status(403).json({ msg: " You can only update your own posts." });
    }

    const update = await postModel.update({ content }, { where: { id } });
    if (!update[0]) {
        console.log("post not found");
    }
    return res.json({ msg: "done" });
};







export const getPost = async (req, res, next) => {
    const { id } = req.params;
    const post = await postModel.findOne({
        where: { id },
        include: [
            {
                model: userModel,
                attributes: ['userName']
            }
        ]
    });

    if (!post) {
        return res.status(404).json({ msg: "Post not found" });
    }

    return res.json({ msg: "done", post });
};