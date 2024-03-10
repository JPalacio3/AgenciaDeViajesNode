/*
Para crear el routing de las páginas lo recomendable es crear su
propio archivo.
1. Importamos express para tener acceso a la funcionalidad de express.
2. Creamos una variable para definir el uso de express.
3. Exportamos la configuración del router para añadirlo a pagina de acceso a la aplicación.
*/

import express from 'express';
import { paginaInicio, paginaNosotros, paginaViajes, paginaTestimoniales } from '../controllers/paginasController.js';

const router = express.Router();

/*
req : Corresponde a lo que enviamos
res : Corresponde a lo que express nos responde
render() : Permite asignar el archivo de views que queremos que se renderice y se muestre en la vista
*/
router.get( '/', paginaInicio );

router.get( '/nosotros', paginaNosotros );

router.get( '/viajes', paginaViajes );

router.get( '/testimoniales', paginaTestimoniales);

export default router;
