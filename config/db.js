import mysql from 'mysql2';
const db = mysql.createConnection({
  host: 'localhost', 
  user :'root',
    password: 'n3u3da!',
    database: 'pega'


});
db.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err.stack);
    return;
  }
  console.log('Connected to the database.');
});

export default db;