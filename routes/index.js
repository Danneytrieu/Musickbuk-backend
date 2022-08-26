var express = require('express');
var router = express.Router();
const personRoutes = require("./person");

// Public Routes 
router.use('/api', personRoutes );

module.exports = router;
