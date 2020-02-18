const express = require("express");
const db = require("./data/dbConfig.js");

const server = express();
server.use(express.json());

server.get("/cars", async (req, res) => {
  try {
    const cars = await db("cars");
    res.status(200).json(cars);
  } catch (error) {
    res.status(500).json({ error: "server error :(" });
  }
});

server.post("/cars", async (req, res) => {
  try {
    const newCarID = await db("cars").insert(req.body);
    const newCar = await db("cars")
      .where({ id: Number(newCarID) })
      .first();
    res.status(201).json(newCar);
  } catch (error) {
    res.status(500).json({ error: "server error :(" });
  }
});

// server.put("/cars/:id", async (req, res) => {
//   try {
//     const updatedCarID = await db("cars")
//       .where({ id: req.params.id })
//       .update(req.body);
//     res.status(200).json(updatedCarID);
//   } catch (error) {
//     res.status(500).json({ error: "server error :(" });
//   }
// });

module.exports = server;
