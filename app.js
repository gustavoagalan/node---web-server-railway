const  express  =  require ( 'express' ) 
const hbs = require('hbs');
require('dotenv').config();

const  app  =  express ( )
const port = process.env.PORT;

//Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials( __dirname + '/views/partials');

// Servir contenido estatico
app.use(express.static('public'));

app.get ( '/' ,    ( req , res )  => { 
  res.render ('home.hbs', {
    nombre: 'Gustavo Galan',
    titulo: 'Curso de Node'}) 
});

app.get ( '/generic' ,    ( req , res )  => { 
  res.render ('generic.hbs',  {
    nombre: 'Gustavo Galan',
    titulo: 'Curso de Node'}) 
});

app.get ( '/elements' ,    ( req , res )  => { 
  res.render ('elements.hbs',  {
    nombre: 'Gustavo Galan',
    titulo: 'Curso de Node'}) 
});


// La siguiente instruccion no se ejecuta porque ya tenemos el contenido estatico para mostrar
app.get ( '/' ,    ( req , res )  => { 
  res.send ('Home Page1111') 
});

app.get ( '/generic' , ( req , res ) =>  { 
  res.sendFile (__dirname + '/public/generic.html') 
});

app.get ( '/elements' , ( req , res ) =>  { 
  res.sendFile (__dirname + '/public/elements.html') 
});

app.get ( '/holamundo1' ,    ( req , res ) =>  { 
  res.send ('Hola mundo en su respectiva ruta') 
});

app.get ( '/holamundo' ,    ( req , res ) =>  { 
  res.send ('Hola mundo ruta numero 2') 
});

/*app.get ( '*' , ( req , res ) =>  { 
  res.send ('404 | page not found') 
});  */

app.get ( '*' , ( req , res ) =>  { 
  res.sendFile (__dirname + '/public old/404.html') 
});

app.listen(port, () => {
  console.log(`Example app listening at htpp:localhost:${port}`)
})




