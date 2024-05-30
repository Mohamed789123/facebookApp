import commentModel from "../../../DB/models/comment.model.js";



export const getComments = async (req, res, next) => {
    const comments = await commentModel.findAll()
    return res.json({ msg: "done", comments })
}




export const addComments = async (req, res, next) => {
    const { content, userId, postId } = req.body
    const comment = await commentModel.bulkCreate(req.body)
    return res.json({ msg: "done", comment })
}
export const getAllComments = async (req, res, next) => {
    const comments = await commentModel.findAll()
    return res.json({ msg: "done", comments })
}




export const updateComments = async (req, res, next) => {
    const { id } = req.params
    const { content } = req.body
    const update = await commentModel.update({ content }, { where: { id } })
    if (!update[0]) {
        console.log("cant update");
    }
    return res.json({ msg: "done" })
}


export const deleteComment = async (req, res, next) => {
    const { id } = req.params
    const deleted = await commentModel.destroy({ where: { id } })
    return res.json({ msg: "done", deleted })
}