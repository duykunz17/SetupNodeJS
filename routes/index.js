var express = require("express");
let router  = express.Router();

router.use(express.static('views')); // use default path views 

router.get('/', (req, res) => {
    res.sendFile("index.html");
});

module.exports = router;