var config = require('./config');
exports.usersList = async (req,res,next) => {

    var users = await config.db.collection('users').find().toArray();
    res.send({ success : 200 , list : users });
    return next();
}
exports.user = async (req,res,next) => {

    var id = req.params.id;
    var user = await config.db.collection('users').findOne( {_id : config.ObjectId(req.params.id) });
    //console.log(userData);
    res.send({success : '200', data : user});
    return next();
}
exports.addUser = async (req,res,next) => {

    var data = { ...(req.body),created_at : new Date()};
    var store = await config.db.collection('users').save(data);
    res.send(store);
}