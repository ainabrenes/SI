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
  
  console.log(req.body);
  if (req.body.name && req.body.email){
    const statement =db.prepare("INSERT INTO usuarios (nombre,email) VALUES(?,?)")
    const info =statement.run(req.body.name,req.body.email);
    //statement.run(req.body.name,req.body.email)
   console.log(info);
  }
  res.redirect("usuario");
}) 
//productos
app.get('/producto', (req, res) => {
  res.render("producto");
})
app.post('/producto', (req, res) => {
  console.log(req.body);
  if (req.body.name && req.body.precio){
    const statement =db.prepare("INSERT INTO productos (nombre, precio) VALUES(?,?)")
    const info =statement.run(req.body.name,req.body.precio);
    console.log(info);
  }
  res.redirect("producto");
})
//comandas
app.get('/comandas', (req, res) => {
  const rows =db.prepare ("SELECT * from comandas").all();
  res.json(rows)
})
app.get('/comanda', (req, res) => {
  comandaId= req.query.id;
  const rows =db.prepare ("SELECT * from comandas WHERE id=?").get(comandaId);
  res.json(rows)
})





app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
