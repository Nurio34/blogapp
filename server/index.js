const express = require("express");
const cors = require("cors");
const app = express();
require("./db");
const Router = require("./router");

app.use(cors());
app.use(express.json());

app.use("/api/blogs", Router);

app.listen(5000, () => {
    console.log("Server running at 5000");
});
