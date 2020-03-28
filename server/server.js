const express = require('express');
const path = require('path');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const mongoUser = require('./config').mongoUser;
const mongoPass = require('./config').mongoPass;

// Connection URL
const uri = `mongodb+srv://${mongoUser}:${mongoPass}@cluster0-jdvtt.mongodb.net/test?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect().then(()=>{
  console.log('connected');
});

app.use(express.static(path.join(__dirname, '../public')));

app.get("/items/:itemId", (req, res)=>{
  console.log("get received for item ", req.params.itemId);
  var itemId = +req.params.itemId;
  client.db("etsyPoc").collection("items").findOne({'itemId': itemId }, (err, results)=>{
    console.log(req.params.itemId);
    if(err){
      console.log('mongo error:', err);
      res.status(403).send("Error connecting to database");
    } else {
      res.send(results);
    }
  });
});

// app.get('/bundle', (req, res) => {
//     res.writeHead(200, {
//         'Content-Type': 'text/html',
//         'Link': '<http://localhost:8080/bundle.js>; rel="fragment-script"'
//     });
//     res.end('');
// });


app.listen(4321, () => {
  console.log('Server listening on: 4321')
})