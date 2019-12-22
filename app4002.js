var express = require('express');
var app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

require("./startup/routes")(app);

let port = 4002;

app.get('/', function (req, res) {
    res.send(`Running ${port}`);
});

app.listen(port, () => console.log(`Listening on port: ${port}`));
