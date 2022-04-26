const express = require( 'express' );

const app = express();
const PORT = 4000;

app.get( '/', ( req, res ) => {
    return res.json( {
        name:  "Dan",
        email: "dan@gmail.com"
    } )
} );

app.listen( PORT, () => {
    console.log( `Servidor corriendo en el puerto ${ PORT }` );
} );