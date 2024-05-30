import { DataTypes, Sequelize } from "sequelize";
import { sequelize } from "../connectionDB.js";

const userModel = sequelize.define("user", {
    userName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
})





export default userModel