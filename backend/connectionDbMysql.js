const mysql = require('mysql')

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '92527422',
  database: 'GROUPOMANIA',
	insecureAuth: true
})

conn.connect(function (err) {
  if (err) {
    console.error('error connecting: ' + err.stack)
    return
  }
  console.log('connected as id ' + conn.threadId)
})

module.exports = conn;