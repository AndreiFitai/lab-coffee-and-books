function startMap() {
  const berlin = {
    lat: 52.518528,
    lng: 13.404389
  };
  const map = new google.maps.Map(
    document.getElementById('map-add'), {
      zoom: 13,
      center: berlin
    }
  );

  const geocoder = new google.maps.Geocoder();

  document.getElementById('coord').addEventListener('click', function () {
    geocodeAddress(geocoder, map);
  });

  function geocodeAddress(geocoder, map) {
    let address = document.getElementById('address').value;

    geocoder.geocode({
      'address': address
    }, function (results, status) {

      if (status === 'OK') {
        console.log(results[0].geometry.location)
        map.setCenter(results[0].geometry.location);
        let marker = new google.maps.Marker({
          map: map,
          position: results[0].geometry.location
        });
        document.getElementById('lat').value = results[0].geometry.location.lat();
        document.getElementById('lng').value = results[0].geometry.location.lng();
      } else {
        alert('Geocode was not successful for the following reason: ' + status);
      }
    });
  }

}



startMap();