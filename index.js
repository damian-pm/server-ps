const express = require('express')
const app = express()
var cors = require('cors')

const port = 8000
app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/upload', (req, res) => {
  console.log(req,res)
  res.json({ answer: 42 });
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
