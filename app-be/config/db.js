const Sequelize = require("sequelize");

const connection = new Sequelize("sqliteDB", "", "", {
  host: "localhost",
  dialect: "sqlite",
  storage: "./data/sqliteDB.sqlite",
  define: {
    freezeTableName: true,
    timestamps: false,
  },
});

// start db

connection
  .authenticate()
  .then((result) => {
    console.log("Connection established.");
  })
  .catch((error) => {
    console.log("Unable to connect to db: ", error);
  });

module.exports = connection;
