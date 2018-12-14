var aws = require('aws-sdk');
aws.config.loadFromPath('./config.json');
var db = new aws.DynamoDB();

db.scan({
    TableName: "Post",
    Select: "ALL_ATTRIBUTES",
});


var appDatabase = function(app) {
  
  return app;
}
module.exports = appDatabase;
