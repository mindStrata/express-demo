This is an express.js app

```js
import express from "express";

const app = express();

app.get("/", (req, res, next) => {
  res.status(200).send({ message: "Hello World" });
});

app.listen(4000, () => {
  console.log("Server running");
});
```
