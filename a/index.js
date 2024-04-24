const express = require('express')
const db= require('better-sqlite3')('perspmas.sqlite')
const app = express()
const port = 3001

//bbdd

app.use(express.json());

app.get('/patata', (req, res) => {
  res.send('Hello World!')
})

app.get('/persona', (req, res) => {
    const rows =db.prepare ("SELECT * from personas").all();
    res.json(rows)
  })
  app.get('/persona', (req, res) => {
    personaId= req.query.id;
    const row =db.prepare ("SELECT * from personas WHERE id=?").get(personaId);
    res.json(row)
  })

app.post("/postPersona",(req,res) => {
    personaId= req.body.id;
    console.log(personaId)
    const row =db.prepare ("SELECT * from personas WHERE id=?").get(personaId);
    console.log(row)
    res.json(row)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
