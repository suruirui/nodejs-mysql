var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'person'
});

connection.connect();

connection.query('SELECT *from person', function(err, rows) {
  if (err) throw err;

    console.log("SELECT ==> ");
            for (var i in rows) {
                console.log(rows[i]);
            }
});

connection.end();