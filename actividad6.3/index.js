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
//comandas
app.get('/comanda', (req, res) => {
  res.render("comanda");
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
 console.log("req.query"+req.query);
  const row =db.prepare ("SELECT * from usuarios WHERE id=?").get(usuarioId);
  console.log("row"+row)
    res.render('detalles',{usuario:row});


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

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

