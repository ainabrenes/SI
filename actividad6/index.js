const express = require('express')
const db= require('better-sqlite3')('usuarios.sqlite')
const dbProductos= require('better-sqlite3')('productos.sqlite')
const dbComandas= require('better-sqlite3')('comandas.sqlite')
const app = express()
const port = 3000

//bbdd

app.use(express.json());

//usuarios
app.get('/usuarios', (req, res) => {
    const rows =db.prepare ("SELECT * from usuarios").all();
    res.json(rows)
  })
app.get('/usuario', (req, res) => {
    usuarioId= req.query.id;
    const row =db.prepare ("SELECT * from usuarios WHERE id=?").get(usuarioId);
    res.json(row)
})
//productos
app.get('/productos', (req, res) => {
  const rows =dbProductos.prepare ("SELECT * from productos").all();
  res.json(rows)
})
app.get('/producto', (req, res) => {
  productoId= req.query.id;
  const row =dbProductos.prepare ("SELECT * from productos WHERE id=?").get(productoId);
  res.json(row)
})
//comandas
app.get('/comandas', (req, res) => {
  const rows =dbComandas.prepare ("SELECT * from comandas").all();
  res.json(rows)
})





app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
