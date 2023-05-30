const express = require("express");
const { ObjectId } = require("mongodb");
const { connectToDb, getDb } = require("./db");
const cors = require("cors");

const PORT = 3000;
const PAGE_SIZE = 5;

const app = express();
app.use(express.json());
app.use(cors());

let db;

connectToDb((err) => {
  if (!err) {
    app.listen(PORT, (err) => {
      err ? console.log(err) : console.log(`Listening port ${PORT}`);
    });
    db = getDb();
  } else {
    console.log(`DB connection error: ${err}`);
  }
});

const handleError = (res, error) => {
  res.status(500).json({ error });
};

app.get("/superheroes", (req, res) => {
  const page = parseInt(req.query.page) || 1;

  db.collection("superheroes")
    .find()
    .skip((page - 1) * PAGE_SIZE)
    .limit(PAGE_SIZE)
    .toArray()
    .then((superheroes) => {
      res.status(200).json(superheroes);
    })

    .catch(() => handleError(res, "Something goes wrong..."));
});

app.get("/superheroes/:id", (req, res) => {
  if (ObjectId.isValid(req.params.id)) {
    db.collection("superheroes")
      .findOne({ _id: new ObjectId(req.params.id) })
      .then((doc) => {
        res.status(200).json(doc);
      })
      .catch(() => handleError(res, "Something goes wrong..."));
  } else {
    handleError(res, "Wrong id");
  }
});

app.delete("/superheroes/:id", (req, res) => {
  if (ObjectId.isValid(req.params.id)) {
    db.collection("superheroes")
      .deleteOne({ _id: new ObjectId(req.params.id) })
      .then((result) => {
        res.status(200).json(result);
      })
      .catch(() => handleError(res, "Something goes wrong..."));
  } else {
    handleError(res, "Wrong id");
  }
});

app.post("/superheroes", (req, res) => {
  db.collection("superheroes")
    .insertOne(req.body)
    .then((result) => {
      res.status(201).json(result);
    })
    .catch(() => handleError(res, "Something goes wrong..."));
});

app.patch("/superheroes/:id", (req, res) => {
  if (ObjectId.isValid(req.params.id)) {
    db.collection("superheroes")
      .updateOne({ _id: new ObjectId(req.params.id) }, { $set: req.body })
      .then((result) => {
        res.status(200).json(result);
      })
      .catch(() => handleError(res, "Something goes wrong..."));
  } else {
    handleError(res, "Wrong id");
  }
});
