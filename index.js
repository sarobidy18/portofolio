const express = require("express");
const path = require("path");

const app = express();
const Port = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, "public")))
app.set("views",path.join(__dirname, "public"))
app.get("/",(req, res) => {
    res.render("index");
})

app.listen(Port, () => {
    console.log(`app listen on Port : ${Port}`);
})
