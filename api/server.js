var express = require('express'),
    cors = require('cors'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser');

var server = express();

server.use(cors());
server.use(bodyParser.json());
server.use(cookieParser());

/*
connection.init(function (conn) {
    server.on('uncaughtException', function (req, res, route, err) {
        console.log('v *************  EXCEPTION EXCEPTION EXCEPTION  *****************v');
        console.log('Uncaught exception:', err);
        console.log('Stack:\n', err.stack);
        console.log('^ ***************************************************************^');
        if (err instanceof Error) {
            res.send(err);
        } else {
            err = new errors.InternalServerError('A runtime error has been logged. Request probably failed.');
            res.send(err);
        }
    });

    server.get('/api/echo/:name', function (req, res, next) {
        console.log("sending back parameter :" + req.params.name);
        res.send(req.params);
        return next();
    });

    var port = process.env.PORT || 8081;
    server.listen(port, function () {
        console.log('%s listening at %s', server.name, server.port);
    });

    loadModules(server, conn, function (err, resp) {
        if (resp.status === "success") {
            console.log('---Main Modules Activated----');
        }
    });
});
*/

server.get('/api/echo/:name', function (req, res, next) {
    console.log("sending back parameter :" + req.params.name);
    res.send(req.params);
    return next();
});

var port = process.env.PORT || 8081;
server.listen(port, function () {
    console.log('listening at port', port);
});

loadModules(server, function (err, response) {
    console.log('---Main Modules Activated----');
});

function loadModules(server, callback) {
    var modules = require('./modules/api');
    modules.init(server);
    callback(null, { status: "success" });
}