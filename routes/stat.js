
var data = require('../data.json');
exports.view = function(req, res){
    res.render('stat', data);
     console.log("fit the data");

};