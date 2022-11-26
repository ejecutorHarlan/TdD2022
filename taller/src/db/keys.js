import mysql from 'mysql2';

const conn = mysql.createConnection({
  HOST: 'localhost',
  USER: 'root',
  PASSWORD: '',
  DATABASE: 'inner',
});

export default conn;
