var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "passwd",
  database:"mydb"
});

select_query="SELECT * FROM  customers";


con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");

  sql = select_query;

  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);

    console.log("\nresult[3] : ",result[3]);
    console.log("result[3].name : ",result[3].name);
  });

});