//Function to create table
function drawTable() {
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
		height: '250px',
		width: '300px',
		page: 'enable',
		pageSize: 20
	}

  	var table = new google.visualization.Table(document.getElementById('table'));
  	table.draw(data, table_options);

  	google.visualization.events.addListener(table, 'select', function() {
    	var row = table.getSelection()[0].row;
    	alert('You selected ' + data.getValue(row, 0));
  	});
}