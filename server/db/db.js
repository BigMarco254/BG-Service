const MongoClient = require('mongodb').MongoClient;
const mongoUser = require('../config').mongoUser;
const mongoPass = require('../config').mongoPass;

// Connection URL

// const MongoClient = require('mongodb').MongoClient;
const uri = `mongodb+srv://${mongoUser}:${mongoPass}@cluster0-jdvtt.mongodb.net/test?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true });

const getItemById = function (itemId, callback){
  client.connect(err => {
    const collection = client.db("etsyPoc").collection("items");
    // perform actions on the collection object
    if (err){
       console.log(`connection error: ${err}`);
      }
      console.log('finding item: ',itemId);
    collection.findOne({_id: itemId },(err, results)=>{
      client.close();
      callback(err, results);
    });
    client.close();
  });
  client.close();
}

// getItemById(111,(err, results)=>{
//   console.log(err ? `err: ${err}` : results);
//   console.log(results);
// });

// import command
//.\mongoimport.exe --host Cluster0-shard-0/cluster0-shard-00-00-jdvtt.mongodb.net:27017,cluster0-shard-00-01-jdvtt.mongodb.net:27017,cluster0-shard-00-02-jdvtt.mongodb.net:27017 --ssl --username bpg031000 --password hratx47 --authenticationDatabase admin --db etsyPoc --collection items --type json --file codebeautify2.json --jsonArray

module.exports = {getItemById};

// Query for Jaeson
// collection.find({storeId:1},{limit:6 , projection:{imageArray:1}}).toArray()
// .then(results => {
//   console.log(results);
// });
// Database Name
// const dbName = 'test';

// // Create a new MongoClient
// const client = new MongoClient(url);

// // Use connect method to connect to the Server
// client.connect(function(err) {
//   assert.equal(null, err);
//   console.log("Connected successfully to server");

//   const db = client.db(dbName);

//   db.collection('testItems').find({_id: 111 }).toArray((err, results)=>{
//     console.log(err ? `err:${err}` : results);
//   });

//   // client.close();
// })