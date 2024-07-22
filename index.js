// main server file
const express = require('express');
const app = express();
const bodyparser = require("body-parser");

// app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

const PORT = process.env.PORT || 7000;

// get method for api calling for read and show the resource
app.get('/', (req, res) => {
        res.send("I am Dixit from Surat.");
        console.log(`Welcome to my server ${PORT}`);
});

app.use(express.json()); // middleware for parse json bodies.

const citiesInfo = require("./routes/cityInfo");
app.use('/api', citiesInfo);


const apiCall = () => {
    try {
        app.listen(PORT, console.log(`I am available at the server ${PORT}.`));
    } catch (error) {
        console.log("Error : ", error);
    }
};

apiCall();
