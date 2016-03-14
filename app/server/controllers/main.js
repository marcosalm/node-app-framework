var utils = require('utility');


exports.create=function(req, res, next){
     console.log('created' );
}
exports.update=function(req, res, next){
     console.log('updated' );
}
exports.destroy=function(req, res, next){
    console.log('deteted' );
}
exports.index=function(req, res, next){
    res.render('index', { title: 'Hey', message: 'Hello there, you\'re in root!'});

}