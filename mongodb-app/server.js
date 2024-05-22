const express = require("express");
let dbConnect = require("./dbConnect"); 
const app = express();
const apiRoutes = require('./routes/apiRoutes');
require("dotenv").config();

app.use('/api', apiRoutes);

// parse requests of content-type - application/json
        app.use(express.json());
    app.get("/", (req, res) => {
res.json({ message: "Welcome to my MongoDB application." });
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;

let userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes);

    app.listen(PORT, () => {
    console.log(`Server is running on port${PORT}.`);
});