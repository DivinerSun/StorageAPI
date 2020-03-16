const Sequelize = require("sequelize");
const { sequelize } = require("../core/db");

class User extends Sequelize.Model {}

User.init(
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        age: Sequelize.INTEGER,
        addr: Sequelize.STRING
    },
    { sequelize }
);

module.exports = { User };
