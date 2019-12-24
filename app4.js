require('newrelic');

console.log('Running app4.js');

var express = require('express');
var app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

require("./startup/routes")(app);

let port = process.env.PORT || 3000;

console.log(`Running on port ${port}`);

app.get('/', function (req, res) {
    res.send(`Running ${port}`);
});

app.listen(port, () => console.log(`Listening on port: ${port} | PID: ${process.pid}`));
