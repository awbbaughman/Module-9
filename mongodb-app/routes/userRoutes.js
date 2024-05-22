let express = require("express");
let router = express.Router();
let Controllers = require("../controllers"); // index.js

// Adds a GET route to return all users
// http://localhost:8080/api/users
    router.get('/', (req, res) => {
        Controllers.userController.getUsers(res);
    })
    
    // Adds a POST route to create a new user
    // http://localhost:8080/api/users/create
    router.post('/create', (req, res) => {
        Controllers.userController.createUser(req.body, res);
    })

    // http://localhost:8080/api/users/<id> adds a PUT route to up
    router.put('/:id', (req, res) => {
        Controllers.userController.updateUser(req, res)
    })

    // http://localhost:8080/api/users/create
    router.delete('/:id', (req, res) => {
         Controllers.userController.deleteUser(req, res)
    })

module.exports = router;