var map;
var TILE_SIZE = 256;
var languageMap = {}; 

languageMap['language1'] = {
	center: new google.maps.LatLng(41.850033,-87.6500523)
}; 

var mapcenter = new google.maps.LatLng(43.5333,5.7000);

function initialize() {
  var myLatlng = new google.maps.LatLng(-25.363882,131.044922);
  var mapOptions = {
    zoom: 1,
    minZoom:1,
    center: mapcenter
  };

  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

  for (var language in languageMap) {
    var languageOptions = {
      strokeColor: '#FF0000',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#FF0000',
      fillOpacity: 0.35,
      map: map,
      center: languageMap[language].center,
      radius: 10000
    };
    // Add the circle for this city to the map.
    languageCircle = new google.maps.Circle(languageOptions);

    //Text to display when hovering the languages in map
	var contentString = '<div id="content">'+
	    '<div id="siteNotice">'+
	    '</div>'+
	    '<h1 id="firstHeading" class="firstHeading">Uluru</h1>'+
	    '<div id="bodyContent">'+
	    '<p><b>language 1</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
	    'language  bla bla</p>'+
	    '<p>Attribution: Uluru, <a href="http://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194"></p>'+
	    'http://en.wikipedia.org/w/index.php?title=Uluru</a> '+
	    '</div>'+
	    '</div>';

	var infowindow = new google.maps.InfoWindow({
	    content: contentString,
	    position: languageMap[language].center,
	    disableAutoPan:true,
	    maxWidth: 150
	});
  }

  google.maps.event.addListener(languageCircle, 'click', function() {
  	infowindow.open(map);
  });
}

google.maps.event.addDomListener(window, 'load', initialize);

