const express = require('express');
const router = express.Router();
const Place = require('../models/Place')

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/addlocation', (req, res, next) => {
  res.render('addlocation');
});

router.post('/addlocation', (req, res, next) => {
  const {
    name,
    product,
    lat,
    lng
  } = req.body
  new Place({
    name,
    product,
    location: {
      type: 'Point',
      coordinates: [lng, lat]
    }
  }).save().then(place => {
    res.render('index')
  });
});

router.get('/api', (req, res, next) => {
  Place.find({}).then(places => {
    res.send(places);
  })
});

module.exports = router;