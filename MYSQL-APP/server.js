const express = require("express");
const app = express();
require("dotenv").config();

let dbConnect = require("./dbConnect");

app.use(express.json())

app.get("/", (req, res) => {
    res.json[{message: "Welcome to MYSQL-APP"}]
})

const PORT = process.env.PORT || 8081;

let userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`)
})