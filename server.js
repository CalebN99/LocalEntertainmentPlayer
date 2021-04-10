const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

app.get('/', function (req, res) {
    res.send('hello world')
  })

  let movieArray = []
  const directoryPath = path.join('C:\\Users\\paint\\OneDrive\\Documents\\GitHub', 'Movies');
  console.log(__dirname)
  //passsing directoryPath and callback function
  fs.readdir(directoryPath, function (err, files) {
  //handling error
  if (err) return console.log('Unable to scan directory: ' + err);
  //listing all files using forEach
  files.forEach(function (file) {
      // Do whatever you want to do with the file
      let str = file.substring(0, file.length - 4);
      console.log(str)
      movieArray.push(str);
  });
});

app.get("/movieTitles", function (req, res) {
  
  
  console.log(movieArray)
  res.send(movieArray)
})



app.get('/video/:id', function(req, res) {
    console.log(req.params.id)
    const path = '..\\Movies\\' + req.params.id + '.mp4';
    const stat = fs.statSync(path);
    const fileSize = stat.size;
    const range = req.headers.range;
    
    if (range) {
    const parts = range.replace(/bytes=/, "").split("-")
    const start = parseInt(parts[0], 10)
    const end = parts[1]
    ? parseInt(parts[1], 10)
    : fileSize-1
    
    const chunksize = (end-start)+1
    const file = fs.createReadStream(path, {start, end})
    const head = {
    'Content-Range': `bytes ${start}-${end}/${fileSize}`,
    'Accept-Ranges': 'bytes',
    'Content-Length': chunksize,
    'Content-Type': 'video/mp4',
    }
    
    res.writeHead(206, head)
    file.pipe(res)
    } else {
    const head = {
    'Content-Length': fileSize,
    'Content-Type': 'video/mp4',
    }
    res.writeHead(200, head)
    fs.createReadStream(path).pipe(res)
    }
    })


    

    
    
    app.listen(3030, function () {
        console.log('Movies hosted on port 3030')
        })