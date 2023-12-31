const dbConfig = require("../config/dbConfig");
const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connected");
  })
  .catch((error) => {
    console.log(error);
  });

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.products = require("./productModel")(sequelize, DataTypes);

db.sequelize.sync({ force: false }).then(() => {
  console.log("Synced !!");
});

module.exports = db;
