//Function to create table
function drawTable(map) {
  	var data = new google.visualization.DataTable();
  	data.addColumn('string', 'Language');
  	data.addColumn('string', 'Region');
  	data.addColumn('string', 'Researcher');
	  data.addRows(collection.element.length);
  	for (var i=0; i<collection.element.length; i++){
	  data.setCell(i, 0, collection.element[i].dc_subject_language);
	  data.setCell(i, 1, collection.element[i].dc_description_region);
	  data.setCell(i, 2, collection.element[i].dc_contributor_researcher)
	}

	var table_options = {
		showRowNumber: true,
		height: '350px',
		width: '530px',
		page: 'enable',
		pageSize: 20
	}

  	var table = new google.visualization.Table(document.getElementById('table'));
  	table.draw(data, table_options);

  	google.visualization.events.addListener(table, 'select', function() {
    	var row = table.getSelection()[0].row;
    	for(i in extra_dataNoDuplates) {
    		if(extra_dataNoDuplates[i]==data.getValue(row, 0)) {
    			if (selected_infowindow.length!=0) selected_infowindow.pop().close(map);
    			infowindow[i].open(map);
    			selected_infowindow.push(infowindow[i]);
    		}
    	}
  	});
}