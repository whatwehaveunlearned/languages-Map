//Script to paint the USA map and World Map

//Load the Geochart Library
google.load('visualization', '1', {packages: ['geochart']});

//Function to paint the WorldMap
function worldMap() {
  var data = google.visualization.arrayToDataTable([
    ['Country', 'Popularity', 'Cuantity'],
    ['Spain', 700, 122],
    ['United States', 300, 1223],
    ['Brazil', 400, 900],
    ['Canada', 500, 800],
    ['France', 600, 722],
    ['RU', 700, 300]
  ]);
  var World = new google.visualization.GeoChart(
      document.getElementById('Worldmap'));
  World.draw(data, {width: 710, height: 372});

  //Function to get the name of the country we click on the world map
  google.visualization.events.addListener(World, 'regionClick', function(eventData)
    {
      region = eventData.region;
      console.log(region)
    });
};
