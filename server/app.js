const express = require('express')

const app = express()

app.get('/users', function (req, res) {
  res.json([
    {
      id: 1,
      name: 'csy'
    },
    {
      id: 2,
      name: 'cjl'
    }
  ])
})

app.listen(3000, function () {
  console.log('api server is listening 3000')
})
