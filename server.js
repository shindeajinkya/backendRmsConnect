const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv/config');   

// create express app
const app = express();

app.use(cors({origin: 'http://192.168.2.5:3001'}));

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

// define a simple route
app.get('/', (req, res) => {
    res.json({"message": "Welcome to API for RMS Connect."});
});

// listen for requests
app.listen(3000, '192.168.2.5', () => {
    console.log("Server is listening on port 3000, make sure you check you added ip address.");
});

//Require Routes
require('./app/routes/user.routes')(app);
require('./app/routes/location.routes')(app);
require('./app/routes/feed.routes')(app);
require('./app/routes/recruit.routes')(app);

//Connecting to the database
mongoose.connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
}).then(() => {
    console.log("Successfully connected to the database");
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});