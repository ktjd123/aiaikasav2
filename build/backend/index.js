'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var port = 4000;

app.use(function (err, req, res, next) {
    console.error(err.stack);
    return res.status(500).json({ code: 0 });
});

app.listen(port, function () {
    console.log('Api server is running at', port);
});