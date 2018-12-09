var fs = require('fs');


fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log("Using appendFile");
  console.log('Saved!');
}); 

fs.open('mynewfile2.txt', 'w', function (err, file) {
  if (err) throw err;
  console.log("Using open");
  console.log('Saved!');
}); 

fs.writeFile('mynewfile3.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log("Using writeFile");
  console.log('Saved!');
}); 
