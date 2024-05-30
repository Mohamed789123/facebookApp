import { Sequelize } from "sequelize";

export const sequelize = new Sequelize('bzla0auojounozxf4thx', 'uks7zp2xvos69qeq', 'l7kTmwQGnSJqHOw1Ro5E', {
    host: 'bzla0auojounozxf4thx-mysql.services.clever-cloud.com',
    dialect: "mysql"
})



const connectionDB = async () => {
    await sequelize.sync({ alter: false, force: false }).then(() => {
        console.log("connected to database")
    }).catch((err) => {
        console.log("error in connecting to database", err)
    })
}








export default connectionDB