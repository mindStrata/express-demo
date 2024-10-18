import dotenv from "dotenv";
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
dotenv.config({ path: "./.env" });

const __filename = fileURLToPath(import.meta.url); // @requires fileURLToPath from 'url' module
const __dirname = path.dirname(__filename); // Retrieves the directory name of the current module

const app = express();
const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("index");
  // res.send("Hello World");
});

app.get("/getdata", async (req, res) => {
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

export default app;
