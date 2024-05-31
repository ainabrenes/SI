const express = require('express')
const db= require('better-sqlite3')('usuarios.sqlite')
const app = express()
const port = 3000

//bbdd

app.set("view engine","ejs");
app.use(express.urlencoded({extended:true}));
app.use(express.json());

/*app.get("/",(req, res)=>{
  res.render("index",msgs={msgs:["Hola","desde","la", "ruta"]});
})*/
app.get("/",(req, res)=>{
  usuarioId= req.query.id;
  const rows =db.prepare ("SELECT * from usuarios").all();
  res.render("index",msgs=rows);
})   

//usuarios
app.get('/usuarios', (req, res) => {
  const rows =db.prepare ("SELECT * from usuarios").all();
  res.render(rows)
})
app.get('/productos', (req, res) => {
  const rows =db.prepare ("SELECT * from productos").all();
  res.render(rows)
})
//comandas
app.get('/comandas', (req, res) => {
  const rows =db.prepare ("SELECT * from comandas").all();
  res.json(rows)
})

//el render de la vista con un form
app.get("/usuario", (req, res) => {
    //usuarioId= req.query.id;
    //const row =db.prepare ("SELECT * from usuarios WHERE id=?").get(usuarioId);
    res.render("usuario");
})
//capturar
app.post("/usuario", (req, res) => {
  //usuarioId= req.query.id;
  //const row =db.prepare ("SELECT * from usuarios WHERE id=?").get(usuarioId);
  //res.json(row)
  try{
    if (!req.body.name || !req.body.email){
      throw new Error("Por favor, completa todos los campos.");
    }
  console.log(req.body);
  if (req.body.name && req.body.email){
    const statement =db.prepare("INSERT INTO usuarios (nombre,email) VALUES(?,?)")
    const info =statement.run(req.body.name,req.body.email);
    //statement.run(req.body.name,req.body.email)
   console.log(info);
  }
  res.redirect("usuario");
}catch(error){
   
    res.status(400).send(error.message);
}
}) 
//productos
app.get('/producto', (req, res) => {
  res.render("producto");
})
app.post('/producto', (req, res) => {
  try{
    if (!req.body.name || !req.body.precio || req.body.precio<0){
      throw new Error("Por favor, completa todos los campos.");
    }
  console.log(req.body);
  if (req.body.name && req.body.precio){
    const statement =db.prepare("INSERT INTO productos (nombre, precio) VALUES(?,?)")
    const info =statement.run(req.body.name,req.body.precio);
    console.log(info);
  }
  res.redirect("producto");
}catch(error){
  console.error(error);
  res.status(400).send(error.message);
}
})
//comandas añadir
app.get('/comanda', (req, res) => {
  const usuarios = db.prepare("SELECT * FROM usuarios").all();
  const productos = db.prepare("SELECT * FROM productos").all();
  res.render('comanda', { usuarios: usuarios, productos: productos });
})
app.post('/comanda', (req, res) => {
  try{
    if (!req.body.usuario_id || !req.body.producto_id){
      throw new Error("Por favor, completa todos los campos.");
    }
  console.log(req.body);
  if (req.body.usuario_id && req.body.producto_id){
    const statement =db.prepare("INSERT INTO comandas (usuario_id, producto_id) VALUES(?,?)")
    const info =statement.run(req.body.usuario_id,req.body.producto_id);
    console.log(info);
  }
  res.redirect("comanda");
}catch(error){
  
  res.status(400).send(error.message);
}
})


//lista usuarios
app.get('/listausuarios',(req,res)=>{
  const rows =db.prepare("SELECT * from usuarios").all();
  res.render("listausuarios",msgs=rows)
})
//lista productos
app.get('/listaproductos',(req,res)=>{
  const rows =db.prepare("SELECT * from productos").all();
  res.render("listaproductos",msgs=rows)
})
//lista comandas
app.get('/listacomandas',(req,res)=>{
  const rows =db.prepare("SELECT * from comandas").all();
  res.render("listacomandas",msgs=rows)
})

app.get('/detallesusuarios',(req,res)=>{
 usuarioId= req.query.id;
  const row =db.prepare ("SELECT * from usuarios WHERE id=?").get(usuarioId);
  res.render('detallesusuarios',{usuario:row});


})
app.get('/detallesproducto',(req,res)=>{
  producto_id= req.query.id;
   const row =db.prepare ("SELECT * from productos WHERE id=?").get(producto_id);
   res.render('detallesproducto',{producto:row});
 
 
 })
 app.get('/detallescomanda',(req,res)=>{
  comandaId= req.query.id;
   const row =db.prepare ("SELECT * from comandas WHERE id=?").get(comandaId);
   res.render('detallescomanda',{comanda:row});
 
 
 })

 app.get('/productoUpdate', (req, res) => {
  const productoId = req.query.id;
  const row = db.prepare("SELECT * FROM productos WHERE id=?").get(productoId);
  res.render('productoUpdate', { producto: row });
});

app.post('/productoUpdate', (req, res) => {
  try {
    const { id, name, precio } = req.body;
    if (!id || !name || !precio || precio < 0) {
      throw new Error("completa todos los campos ");
    }
    const statement = db.prepare("UPDATE productos SET nombre=?, precio=? WHERE id=?");
    const info = statement.run(name, precio, id);
    console.log(info);
    res.redirect('/listaproductos');
  } catch (error) {
    console.error(error);
    res.status(400).send(error.message);
  }
});


app.get('/usuarioUpdate', (req, res) => {
  const usuarioId = req.query.id;
  const row = db.prepare("SELECT * FROM usuarios WHERE id=?").get(usuarioId);
  res.render('usuarioUpdate', { usuario: row });
});

app.post('/usuarioUpdate', (req, res) => {
  try {
    const { id, name, email } = req.body;
    if (!id || !name || !email) {
      throw new Error(" completa todos los campos.");
    }
    const statement = db.prepare("UPDATE usuarios SET nombre=?, email=? WHERE id=?");
    const info = statement.run(name, email, id);
    console.log(info);
    res.redirect('/listausuarios');
  } catch (error) {
    console.error(error);
    res.status(400).send(error.message);
  }
});


app.get('/comandaUpdate', (req, res) => {
  const comandaId = req.query.id;
  const row = db.prepare("SELECT * FROM comandas WHERE id=?").get(comandaId);
  const usuarios = db.prepare("SELECT * FROM usuarios").all();
  const productos = db.prepare("SELECT * FROM productos").all();
  res.render('comandaUpdate', { comanda: row, usuarios: usuarios, productos: productos });
});

app.post('/comandaUpdate', (req, res) => {
  try {
    const { id, usuario_id, producto_id } = req.body;
    if (!id || !usuario_id || !producto_id) {
      throw new Error("completa todos los campos.");
    }
    const statement = db.prepare("UPDATE comandas SET usuario_id=?, producto_id=? WHERE id=?");
    const info = statement.run(usuario_id, producto_id, id);
    console.log(info);
    res.redirect('/listacomandas');
  } catch (error) {
    console.error(error);
    res.status(400).send(error.message);
  }
});




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

/*
app.get("/usuarioUpdate",(req,res)=>{
  usuarioId=req.query.id;
  const row= db.prepare("SELECT * from usuarios where id=?").get(usuarioId);
  res.render("personaAdd",{persona:row});
})
app.post("/usuarioUpdate",(req,res)=>{
  usuarioId=req.query.id;
  const row= db.prepare("SELECT * from usuarios where id=?").get(usuarioId);
  res.render("personaAdd",{persona:row});
})
*/