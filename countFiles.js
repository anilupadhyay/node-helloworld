var fs = require('fs');

var path1 = "./",
    path2 = ".././",
    logCount;

function countFiles(path, callback) {
    fs.readdir(path, function (err, filenames) {
        callback(err, path, filenames.length);
    });
}

logCount = function (err, path, count) {
    console.log(count + " files in " + path);
};

countFiles(path1, logCount);
countFiles(path2, logCount);
