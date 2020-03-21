const express = require('express');
const path = require('path');
const app = express();



app.use(express.static(path.join(__dirname, '../public')));

app.get("/", (req, res)=>{
  console.log("get received");
  res.send();
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