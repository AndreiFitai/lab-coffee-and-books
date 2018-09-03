const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const placeSchema = new Schema({
  name: String,
  product: {
    type: String,
    enum: ['bookstore', 'coffeeshop']
  },
  location: {
    type: {
      type: String
    },
    coordinates: [Number]
  }
})

placeSchema.index({
  location: '2dsphere'
})

const Place = mongoose.model('Place', placeSchema)
module.exports = Place;