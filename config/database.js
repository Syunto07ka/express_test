function appDatabase() {
    var aws = require('aws-sdk');
    aws.config.loadFromPath('./config.json');
    var db = new aws.DynamoDB();

    db.scan({
        TableName: "Post",
        Select: "ALL_ATTRIBUTES",
    }, function(err, datas) {
        if(err) {
            console.log(err);
        }else if(datas == null || datas.Count == 0){
            console.log('No data!');
        }else{
            console.log(datas);
        }
    });
}
module.exports = appDatabase();
