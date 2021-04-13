// Setup empty JS object to act as endpoint for all routes
let projectData = {};

// Require Express to run server and routes
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 8040;

// Start up an instance of app
const app = express();
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
app.use(cors());


// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
app.listen(port, () => {

    console.log(`Server listening on port :${port}`);

});

app.get("/getData", (req, res) => {

    console.log('The server received a GET request');
    res.send(projectData);

});

app.post("/addWeather", (req, res) => {

    console.log('The server received a POST request');
    projectData = req.body;
    res.send();
})