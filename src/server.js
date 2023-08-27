import express from "express";

// const express = require("express");

import dotenv from "dotenv"
dotenv.config();

// require("dotenv").config();

const app = express();
const port = process.env.PORT || 9000;

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});