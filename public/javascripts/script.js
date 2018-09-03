// const axios = require('axios')
const coffeeMark = ('../images/coffee.png')
const bookMark = ('../images/book.png')

function startMap() {
  const berlin = {
    lat: 52.518528,
    lng: 13.404389
  };
  const map = new google.maps.Map(
    document.getElementById('map'), {
      zoom: 13,
      center: berlin
    }
  );
  axios.get('http://localhost:3000/api').then(data => {
    setMarkers(data.data)
  })
  markers = [];

  function setMarkers(places) {
    places.forEach(function (place) {
      let marker;
      if (place.product === 'bookstore') {
        marker = bookMark
      } else {
        marker = coffeeMark
      }
      const center = {
        lat: place.location.coordinates[1],
        lng: place.location.coordinates[0]
      };
      const pin = new google.maps.Marker({
        position: center,
        map: map,
        title: place.name,
        icon: marker
      });
      markers.push(pin)
    });
  }
}


startMap();