var cluster = require('cluster');

if (cluster.isMaster) {
    var cpuCount = require('os').cpus().length;

    // for (var i = 0; i < cpuCount; i += 1) {
    for (var i = 0; i < 4; i += 1) {
        cluster.fork();
    }

    cluster.on('exit', function (worker) {
        console.log(`Worker died | Cluster ID: ${cluster.worker.id}`);
        cluster.fork();
    });

} else {
    var express = require('express');
    var app = express();
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));

    require("./startup/routes")(app);

    app.get('/', function (req, res) {
        res.send(`Running | Cluster ID: ${cluster.worker.id}`);
    });

    app.listen(3000);
    console.log(`Running | Cluster ID: ${cluster.worker.id}`);
    console.log(`Running | Process ID: ${process.pid}`);
}