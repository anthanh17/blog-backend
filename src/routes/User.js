import express from "express"

export const router = express.Router();

router.get("/categories", (req, res) => {
  res.send('categories api');
});
