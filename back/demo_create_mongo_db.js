var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    console.log("Database created!");
    db.close();
});

//11111111fhf//db.createUser( { user: "alex", pwd: "", roles: [ { role: "userAdminAnyDatabase", db: "admin" } ] } )
