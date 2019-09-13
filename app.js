let express = require('express');

var app = express();

const indexRouter = require("./routes/index");

app.use('/', indexRouter);
//app.use(express.static('public'));

module.exports = app.listen(3000, function(){
    console.log("Working an port 3000");
});