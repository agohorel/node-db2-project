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
    res.status(201).json(newCarID);
  } catch (error) {
    res.status(500).json({ error: "server error :(" });
  }
});

module.exports = server;
