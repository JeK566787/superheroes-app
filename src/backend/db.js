const { MongoClient } = require("mongodb");

const URL =
  "mongodb+srv://JeK:Pass12345!@clusternew.wlbfc3m.mongodb.net/superheroesdb?retryWrites=true&w=majority";

let dbConnection;

module.exports = {
  connectToDb: (cb) => {
    MongoClient.connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
      .then((client) => {
        console.log("Connected to MongoDB");
        dbConnection = client.db("superheroesdb");
        return cb();
      })
      .catch((err) => {
        return cb(err);
      });
  },
  getDb: () => dbConnection,
};
