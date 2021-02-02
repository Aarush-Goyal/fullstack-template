import express from "express";

const app = express();

app.get("/", (req, res) => res.send("index"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Listening on port ${PORT}`));
