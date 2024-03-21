// Importa el modelo
import { Testimonial } from "../models/Testimoniales.js";
import { Viaje } from "../models/Viaje.js";

// Controlador para la página de incio
const paginaInicio = async ( req, res ) => {
    // Consultar 3 viajes del modelo Viaje
    //Crear una promesa para realizar varias consultas al modelo de Viaje al mismo tiempo
    const promiseDB = [];
    promiseDB.push( Viaje.findAll( { limit: 3 } ) );
    promiseDB.push( Testimonial.findAll( { limit: 3 } ) );

    try {
        const resultado = await Promise.all( promiseDB );

        res.render( 'inicio', {
            pagina: 'Inicio',
            clase: 'home',
            viajes: resultado[ 0 ],
            testimoniales: resultado[ 1 ]
        } );
    } catch ( error ) {
        console.log( error );
    }
}

// Controlador para la página Nosotros
const paginaNosotros = ( req, res ) => {
    res.render( 'nosotros', {
        pagina: 'Nosotros'
    } );
}

// Controlador para la pagina Viajes
const paginaViajes = async ( req, res ) => {
    // Consular la base de datos
    const viajes = await Viaje.findAll();
    console.log( viajes )

    res.render( 'viajes', {
        pagina: 'Próximos Viajes',
        viajes,
    } );
}

// Controlador para mostrar los viajes por su slug
const paginaDetalleViaje = async ( req, res ) => {
    const { slug } = req.params;

    try {
        const viaje = await Viaje.findOne( { where: { slug } } );

        res.render( 'viaje', {
            pagina: 'Información Viaje',
            viaje
        } );
    } catch ( error ) {
        console.log( error );
    }
}

// Controlador para la página Testimoniales
const paginaTestimoniales = async ( req, res ) => {

    try {
        // Consultar el módelo de testimoniales
        const testimoniales = await Testimonial.findAll();

        res.render( 'testimoniales', {
            pagina: 'Testimoniales',
            testimoniales
        } );
    } catch ( error ) {
        console.log( error );
    }
}

export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimoniales,
    paginaDetalleViaje
}
