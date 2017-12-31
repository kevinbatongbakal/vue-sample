
exports.GET_sample = function (req, res, next) {
    sample(function (err, response) {
        if (err) res.send(err);
        res.send(response);
    });
};

function sample(callback) {
    var response = {
        success: true,
        data: [
            'data 1',
            'data 2',
            'data 3',
            'data 4'
        ]
    }

    callback(null, response);
}