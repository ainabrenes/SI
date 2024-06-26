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
    console.error(error);
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
