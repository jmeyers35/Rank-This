const express = require('express')
require('dotenv').config()
const port = 3000 // TODO change
const app = express()
app.use(express.json())

// app.get('/', (req, res) => {
//     res.send('Hello express')
// })

app.listen(port, () => console.log('Server starting...'))