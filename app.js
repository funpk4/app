
const express = require("express");
const app = express();
app.use(express.json());
const port = process.env.PORT || 4000;
app.get("/", (req, res)=>
{
  res.send("Hello World");
})
app.listen(8899, () => {

  console.log("project work on 8899")
})
