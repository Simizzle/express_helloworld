const express = require('express');
const { helloworld } = require('./controllers');
const app = express();

app.post("/hw", helloworld);



app.listen(5000, () => {
    console.log("Listening on port 5000");
});