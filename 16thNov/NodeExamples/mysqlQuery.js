var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "passwd",
  database:"mydb"
});

create_db_query="CREATE DATABASE mydb";
create_table_query="CREATE TABLE customers (id INT AUTO_INCREMENT PRIMARY KEY,name VARCHAR(255), address VARCHAR(255))"
alter_table_query="ALTER TABLE customers ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY";


con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");

  sql = create_table_query;

  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Query successful");
  });

});