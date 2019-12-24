require('newrelic');
const logger = require('./logger/logger');

logger.info({message: `process.env.PORT: ${process.env.PORT}`, file: __file, func: __function, line: __line, });

logger.info({message: `Running`, file: __file, func: __function, line: __line, });

var express = require('express');
var app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

require("./startup/routes")(app);

let port = process.env.PORT || 3000;

logger.info({message: `Running on port ${port}`, file: __file, func: __function, line: __line, });

app.get('/', function (req, res) {
    logger.info({message: `GET / | PID: ${process.pid}`, file: __file, func: __function, line: __line, });

    res.send(`Running ${port}`);
});

app.get('/proxy', function (req, res) {
    logger.info({message: `GET /proxy | PID: ${process.pid}`, file: __file, func: __function, line: __line, });

    res.send(`Running ${port}`);
});


app.listen(port, () => logger.info({message: `Listening on port: ${port} | PID: ${process.pid} | ENV: ${process.env.NODE_ENV}`, file: __file, func: __function, line: __line, }));
