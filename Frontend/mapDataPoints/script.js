var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: new google.maps.LatLng(39.8282,-98.5795),
    mapTypeId: 'terrain'
  });

  var script = document.createElement('script');
  script.src = 'data.js';
  document.getElementsByTagName('head')[0].appendChild(script);
}

// Loop through the results array and place a marker for each
// set of coordinates.
window.getMaps = function(results) {
  for (var i = 0; i < results.tweets.length; i++) {
    var coords = results.tweets[i].location;
    var latLng = new google.maps.LatLng(coords[1],coords[0]);
    var marker = new google.maps.Marker({
      position: latLng,
      map: map
    });
  }
}
