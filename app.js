import dotenv from "dotenv";
dotenv.config({ path: "./.env" });
import express from "express";
import "./db/db.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", async (req, res, next) => {
  res.send("Hello World...");
});

app.get("/getdata", async (req, res, next) => {
  res.status(200).send({
    success: true,
    message: "Data fetched successfully",
    data: [
      {
        id: 1,
        title: "Express.js tutorial 2024",
        comments: 12,
      },
      {
        id: 2,
        title: "Node.js tutorial 2024",
        comments: 3,
      },
    ],
    error: null,
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
