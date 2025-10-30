// app.js
const express = require('express');
const db = require('./src/middleware/dbConnection');
const routes = require('./src/middleware/routes/index');

const app = express();
const PORT = 3000;

app.use('/', routes);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
