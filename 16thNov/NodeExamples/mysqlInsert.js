var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "passwd",
  database:"mydb"
});

insert_single_query="INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')"

insert_multiple_query="INSERT INTO customers (name, address) VALUES ?";

var values = [
    ['John', 'Highway 71'],
    ['Peter', 'Lowstreet 4'],
    ['Amy', 'Apple st 652']];


con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");

  sql = insert_single_query;

  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Query successful");
    console.log("result.insertId : ",result.insertId );
  });

});