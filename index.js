import express from 'express';
import router from './routes/index.js';

const app = express();

// Definir puerto
const port = process.env.PORT || 4000;

// Habilitar pug
app.set( 'view engine', 'pug' );

// Agregar router
// .use() es un verbo que va a permitir soporte para todos los demás verbos establecidos en el router
app.use( '/', router );

// Definir la carpeta pública
app.use( express.static( 'public' ) );

app.listen( port, () => {
    console.log( `El servidor está corriendo en el puerto ${port}` );
} );

