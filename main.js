//agon 2014 Feb
//Variables Declaration
var map;
var TILE_SIZE = 256;
var languageMap = [];
//coordinates variables
var north = [];
var east = [];
//Arrays to save coordinates with or withoput duplicates
var languageCenter = [];
var extra_data = [];
var extra_dataNoDuplates = [];
var languagesCenterNoDuplicates = [];
//Variables to paint the languages as circles in the map (center and the actual circles)
var circleCenter = []; 
var languageCircle = [];
var contentString = [];
var infowindow = []; 

// MAIN
//Initialize Language Map
map = google.maps.event.addDomListener(window, 'load', initializeLanguageMap);
//load googlecharts for the table
google.load('visualization', '1', {'packages': ['table']});
google.setOnLoadCallback(drawTable)

