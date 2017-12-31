var GET_sample = require("./GET_sample");
var POST_sample = require("./POST_sample");

module.exports.init = function init(server, dbConnection) {

    server.get('/api/sample/sample', function (req, res, next) {
        GET_sample.GET_sample(req, res, next);
    });

    server.post('/api/sample/sample', function (req, res, next) {
        POST_sample.POST_sample(req, res, next);
    });

};