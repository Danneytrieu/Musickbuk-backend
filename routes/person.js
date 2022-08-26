var express = require('express');
var router = express.Router();

const personCtrl = require("../controllers/person.controller")

router.post('/person', personCtrl.getPerson);

module.exports = router;
