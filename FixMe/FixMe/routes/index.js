'use strict';
var express = require('express');

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', { title: 'Express', displayMessage: getDisplayMessage() });
});

module.exports = router;
