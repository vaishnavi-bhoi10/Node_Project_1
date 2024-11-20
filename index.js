// 
const express = require('express')
const mongoose = require('mongoose')
const db = require('./database/db.js')
db();
const Schema = mongoose.Schema
const productSchema = mongoose.Schema({
  name: String,
  price: Number,
  discount: Number,
})
const Mymodel = mongoose.model('products', productSchema)
const app = express()
app.use(express.json())
app.get('/products', async (req, res) => {
  try {
    var result = await Mymodel.find({}, { _id: 0 })
    res.send(result)
  } catch (err) {
    res.send(err.message)

  }
  app.post('/products', async (req, res) => {
    console.log(req.body)
    try {

      var record = Mymodel(req.body)
      var ans = await record.save()
      res.send('inserted')

    } catch (err) {
      res.send(err.message)
    }
  })
})
app.listen(9001)