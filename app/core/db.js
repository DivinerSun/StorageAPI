const Sequelize = require("sequelize");
const { dbConfig } = require("../config");

const sequelize = new Sequelize(dbConfig);

sequelize
    .authenticate()
    .then(() => {
        console.log("数据库连接成功");
    })
    .catch(err => {
        console.log("数据库连接失败", err);
    });

sequelize.sync({ force: true });

module.exports = { sequelize };
