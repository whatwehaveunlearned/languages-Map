//Variables Declaration
var map;
var TILE_SIZE = 256;
var languageMap = [];
//coordinates variables
var north = [];
var east = [];
//Arrays to save coordinates with or withoput duplicates
var languageCenter = [];
var languagesCenterNoDuplicates = [];
//Variables to paint the languages as circles in the map (center and the actual circles)
var circleCenter = []; 
var languageCircle = []; 

function initialize() {
  	//Save languages center coordinates to plot into the map
	for (var i = 0; i<collection.element.length; ++i) {
		languageMap[i] = collection.element[i].dc_coverage_spatial.split('=');
		east[i] = languageMap[i][2];
		languageMap[i] = languageMap[i][1].split(' ');
		north[i] = languageMap[i][0].substring(0,(languageMap[i][0].length)-1);
		//languageCenter[i] = new google.maps.LatLng(north[i],east[i])
		languageCenter[i] = north[i] + ' ' + east[i]
	}
	//eliminate languages in the same place (In the example there are only three different positions)
	languagesCenterNoDuplicates = languageCenter.filter(function(elem, pos) {
    return languageCenter.indexOf(elem) == pos;
	})
	//Transform the values into coordenates
	for(var i=0; i<languagesCenterNoDuplicates.length; ++i){
		var temporary = languagesCenterNoDuplicates[i].split(" ")
		circleCenter[i] = new google.maps.LatLng(temporary[0],temporary[1])
	}

	var mapcenter = new google.maps.LatLng(43.5333,5.7000);
	var mapOptions = {
	zoom: 1,
	minZoom:1,
	center: mapcenter
	};

	var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

	for (var i = 0; i<circleCenter.length; i++) {

		var languageOptions = {
		  strokeColor: '#FF0000',
		  strokeOpacity: 0.8,
		  strokeWeight: 2,
		  fillColor: '#FF0000',
		  fillOpacity: 0.35,
		  map: map,
		  center: circleCenter[i],
		  radius: 10000
		};
		// Add the circle for this city to the map.
		languageCircle [i] = new google.maps.Circle(languageOptions);

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
		    position: languageCircle[0].center,
		    disableAutoPan:true,
		    maxWidth: 150
		});
	}

	google.maps.event.addListener(languageCircle[0], 'click', function() {
		console.log('bien')
		infowindow.open(map);
	});
}

google.maps.event.addDomListener(window, 'load', initialize);

