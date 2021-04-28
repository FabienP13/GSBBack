const mysql = require('mysql');
var connection = mysql.createConnection({
  host     : 'cj654063-002.dbaas.ovh.net',
  port     : 35305,
  user     : 'gsbponcet',
  password : 'gsbponcetSU2020',
  database : 'gsbponcet'
});

module.exports = connection