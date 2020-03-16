exports.dbConfig = {
    database: "test",
    username: "root",
    password: "root123456",
    dialect: "mysql",
    host: "localhost",
    port: 3306,
    timezone: "+08:00",
    logging: true,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    define: {
        timestamps: true,
        paranoid: false
    }
};
