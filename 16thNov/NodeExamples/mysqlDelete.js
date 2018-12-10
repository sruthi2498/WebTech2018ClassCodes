var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "passwd",
  database:"mydb"
});

delete_query="DELETE FROM customers WHERE name = 'Amy'";


con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");

  sql = delete_query;

  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Delete successful");
    console.log("Number of records deleted: " + result.affectedRows);
  });

});