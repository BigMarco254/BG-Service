const express = require('express');
const path = require('path');
const app = express();
const db = require('./db/db');


app.use(express.static(path.join(__dirname, '../public')));

app.get("/items/:itemId", (req, res)=>{
  console.log("get received for item ", req.params.itemId);
  db.getItemById(111, (err, results)=>{
    if (err){
      res.status(404).send("There was an error");
    } else {
      res.send(results);
    }
  })
})

// app.get('/bundle', (req, res) => {
//     res.writeHead(200, {
//         'Content-Type': 'text/html',
//         'Link': '<http://localhost:8080/bundle.js>; rel="fragment-script"'
//     });
//     res.end('');
// });


app.listen(8080, () => {
  console.log('Server listening on: 8080')
})