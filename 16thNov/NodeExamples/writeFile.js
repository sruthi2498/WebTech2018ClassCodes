var fs = require("fs");

// console.log("Going to write into existing file....");
// fs.writeFile('test1.txt', 'New content of the file', function(err) {
//    if (err) {
//       return console.error(err);
//    }
   
//    console.log("Data written successfully!");
//    console.log("Reading newly written data...");
   
//    fs.readFile('test1.txt', function (err, data) {
//       if (err) {
//          return console.error(err);
//       }
//       console.log("Asynchronous read: " + data.toString());
//    });
// });

// var data=fs.readFileSync("test1.txt");
// console.log("old read data : ",data.toString());

// fs.writeFileSync('test1.txt',"New content of the file");

// var data=fs.readFileSync("test1.txt");
// console.log("new read data : ",data.toString());


buffer = new Buffer("New content of the file");

fs.open("test1.txt", 'w', function(err, fd) {
    if (err) {
        throw 'error opening file: ' + err;
    }

    fs.write(fd, buffer, 0, buffer.length, null, function(err) {
        if (err) throw 'error writing file: ' + err;
        fs.close(fd, function() {
            console.log('file written');
        })
    });

    fs.readFile('test1.txt', function (err, data) {
      if (err) {
         return console.error(err);
      }
      console.log("Asynchronous read: " + data.toString());
   });

});