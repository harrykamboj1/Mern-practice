import express from "express";
import { NUMBER } from "@repo/common/config";
const app = express();
console.log(NUMBER);
app.get("/", (req, res) => {
  res.json({
    message: "hello world",
  });
});

app.listen(3000);
console.log("Port listing");
