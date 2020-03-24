const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const mongoUser = require('../config').mongoUser;
const mongoPass = require('../config').mongoPass;

// Connection URL

// const MongoClient = require('mongodb').MongoClient;
const uri = `mongodb+srv://${mongoUser}:${mongoPass}@cluster0-jdvtt.mongodb.net/test?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true }, {useUnifiedTopology: true});
client.connect(err => {
  const collection = client.db("etsyPoc").collection("items");
  // perform actions on the collection object
  collection.find({_id: 111 }).toArray((err, results)=>{
    console.log(err ? `err:${err}` : results);
  });
  client.close();
});


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