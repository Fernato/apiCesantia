
const express = require('express');
require('dotenv').config();
const dbConnection = require('./database/config');
const cors = require('cors');

require('dotenv').config();


//Crear el servidor de express

const app = express();

//base de datos

dbConnection();

app.use(cors());

// Directorio publico

app.use(express.static('public'));

// Lectura y parseo del body

app.use( express.json() );

//Rutas
app.use('/api/cliente', require('./routs/cliente'));
app.use('/api/actividad', require('./routs/actividad'));
app.use('/api/presupuesto', require('./routs/presupuesto'));

// Escuchar peticiones

app.listen( process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${process.env.PORT}` );
} )