const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();
const cors = require("cors");

let whitelist = ["http://localhost:3000"];

app.use(cors());

// let corsOptions = {
//   origin: function (origin, callback) {
//     if (whitelist.indexOf(origin) !== -1) {
//       callback(null, true)
//     } else {
//       callback(new Error('Not allowed by CORS'))
//     }
//   }
// }

// // Then pass them to cors:
// app.use(cors(corsOptions));

app.get("/", function (req, res) {
  res.send("hello world");
});

let movieArray = [];
const directoryPath = path.join(
  "C:\\Users\\paint\\OneDrive\\Documents\\GitHub",
  "Movies"
);
console.log(__dirname);

fs.readdir(directoryPath, function (err, files) {
  if (err) return console.log("Unable to scan directory: " + err);

  files.forEach(function (file) {
    console.log(file);
    movieArray.push(file);
  });
});

app.get("/movieTitles", function (req, res) {
  console.log(movieArray);
  res.send({ title: movieArray });
});

app.get("/video/:id", function (req, res) {
  console.log(req.params.id);
  const path = "..\\Movies\\" + req.params.id;
  const stat = fs.statSync(path);
  const fileSize = stat.size;
  const range = req.headers.range;

  if (range) {
    const parts = range.replace(/bytes=/, "").split("-");
    const start = parseInt(parts[0], 10);
    const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;

    const chunksize = end - start + 1;
    const file = fs.createReadStream(path, { start, end });
    const head = {
      "Content-Range": `bytes ${start}-${end}/${fileSize}`,
      "Accept-Ranges": "bytes",
      "Content-Length": chunksize,
      "Content-Type": "video/mp4",
    };

    res.writeHead(206, head);
    file.pipe(res);
  } else {
    const head = {
      "Content-Length": fileSize,
      "Content-Type": "video/mp4",
    };
    res.writeHead(200, head);
    fs.createReadStream(path).pipe(res);
  }
});

app.listen(3030, function () {
  console.log("Movies hosted on port 3030");
});
