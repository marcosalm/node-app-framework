/**
 * Created by 2Mundos on 14/03/2016.
 */
exports.index = function(req, res, next){
    console.log("HOME");
    res.render('index', { title: 'Hey', message: 'Hello there!'});
};