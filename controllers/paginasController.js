
// Controlador para la página de incio
const paginaInicio = ( req, res ) => {
    res.render( 'inicio', {
        pagina: 'Inicio'
    } );
}

// Controlador para la página Nosotros
const paginaNosotros = ( req, res ) => {
    res.render( 'nosotros', {
        pagina: 'Nosotros'
    } );
}

// Controlador para la pagina Viajes
const paginaViajes = ( req, res ) => {
    res.render( 'viajes', {
        pagina: 'Viajes'
    } );
}

// Controlador para la página Testimoniales
const paginaTestimoniales = ( req, res ) => {
    res.render( 'testimoniales', {
        pagina: 'Testimoniales'
    } );
}

export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimoniales
}
