const express = require("express");
const path = require("path");

const app = express();
const port = 5000;

app.use(express.static(path.join(__dirname, "public")))
app.get("/", async (req, res) => {
    console.log(path.join(__dirname, "public"));
    res.sendFile(path.join(__dirname, "public","index.html"));
})

app.listen(port, () => {
    console.log(`app listen on port : ${port}`);
})
