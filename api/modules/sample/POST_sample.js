
exports.POST_sample = function (req, res, next) {
    var params = req.query;
    var formData = req.body;

    sample(params, formData, function (err, response) {
        if (err) res.send(err);
        res.send(response);
    });
};

function sample(params, formData, callback) {
    var response = {
        success: true,
        params: params,
        formData: formData
    }

    callback(null, response);
}