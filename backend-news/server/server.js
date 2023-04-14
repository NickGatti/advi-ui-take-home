const express = require('express')
const path = require('path')
const app = express()
const port = 3000

const teslaNews = require('./dev/teslaNews.json')

app.use(
    '/',
    express.static(path.join(__dirname, '../dist'))
  );

app.get('/dev/news', (req, res) => {
    res.json(teslaNews)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
