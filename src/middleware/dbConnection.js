// src/middleware/dbConnection.js
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'disenia_user',
    password: 'disenia123',
    database: 'disenia_db',
});

connection.connect((err) => {
    if (err) {
        console.error('Error al conectar a la base de datos:', err.message);
        return;
    }
    console.log('Conexión a la base de datos exitosa.');
});

module.exports = connection;
