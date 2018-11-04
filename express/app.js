const path = require('path')
const fetch = require('node-fetch')
const express = require('express')
/* 
  The express app is a global called app
  It can respond on all routes under /api
*/
let app = global.expressApp
require('dotenv').config({ path: path.resolve(process.cwd(), 'env/.env') })

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/search-weather-city', (req, res) => {
  console.log(req.query)
  const baseUrl = 'http://api.openweathermap.org/data/2.5/weather?q='

  const apiId = `&appid=${process.env.KEY}&units=metric`

  const apiUrl = baseUrl + replaceSwedish(req.query.city) + apiId

  fetch(apiUrl)
    .then(res => res.json())
    .then(data => {
      res.send({ data })
    })
    .catch(err => {
      res.redirect('/error')
    })
})

function replaceSwedish (str) {
  return str.replace('ö', 'oe')
}