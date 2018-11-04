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

app.get('/search-location-weather', (req, res) => {
  const baseUrl = 'http://api.openweathermap.org/data/2.5/weather?zip='

  const apiId = `&appid=${process.env.KEY}&units=metric`

  const userLocation = (url1, url2, zipcode) => {
    let newUrl = url1 + zipcode + url2
    return newUrl
  }

  const apiUrl = userLocation(baseUrl, apiId, zipcode)

  fetch(apiUrl)
    .then(res => res.json())
    .then(data => {
      res.send({ data })
    })
    .catch(err => {
      res.redirect('/error')
    })
})

// Answer hello world on all routes
app.all('*', (req, res) => {
  res.json({
    message: 'Hello world!',
    method: req.method,
    url: req.url
  })
})
