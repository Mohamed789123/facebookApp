import { DataTypes, HasMany } from "sequelize";
import { sequelize } from "../connectionDB.js";
import userModel from "./user.model.js";

const postModel = sequelize.define("post", {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    content: {
        type: DataTypes.STRING,
        allowNull: false
    }
})


userModel.hasMany(postModel)
postModel.belongsTo(userModel, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
})




export default postModel
