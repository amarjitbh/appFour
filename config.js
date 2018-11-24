const mongodb = require("mongodb");
const connection = mongodb.MongoClient.connect;

exports.maxRemindCount = 2;
exports.db = null;
exports.secret = 'ilovescotchyscotch';
exports.ObjectId = mongodb.ObjectId;
exports.connDb = async function () {

    let mongoUrl = "mongodb://localhost/appOne";
    var dbName = "appOne";
    const _dbconn = await mongodb.connect(mongoUrl, { useNewUrlParser : true});
    exports.db = _dbconn.db(dbName);
    exports.db.close = _dbconn.close;
    return exports.db;
}
exports.closeDB = function () {
	exports.db.close();
};