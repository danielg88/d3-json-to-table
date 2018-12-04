		var table = d3.select(this.domNode).append('table');
		var thead = table.append('thead');
		var	tbody = table.append('tbody');
        
var csv = this.dataInterface.getRawData(mstrmojo.models.template.DataInterface.ENUM_RAW_DATA_FORMAT.ROWS_ADV,{hasTitleName:true});


// Let's process the data which will be used to render the visualization

var processedData = [];
var numberOfRows = this.dataInterface.getTotalRows();
for (var n = 0; n < numberOfRows; n++) {
  processedData[n] = {};

  processedData[n] = csv[n].headers[0].name;
}






d3.json('../plugins/D3Grid2/javascript/mojo/js/source/data.json', function (error,data) {

  function tabulate(data, columns) {


		// append the header row
		thead.append('tr')
		  .selectAll('th')
		  .data(columns).enter()
		  .append('th')
		    .text(function (column) { return column; });

		// create a row for each object in the data
		var rows = tbody.selectAll('tr')
		  .data(data)
		  .enter()
		  .append('tr');

		// create a cell in each row for each column
		var cells = rows.selectAll('td')
		  .data(function (row) {
		    return columns.map(function (column) {
		      return {column: column, value: row[column]};
		    });
		  })
		  .enter()
		  .append('td')
		    .text(function (d) { return d.value; });

	  return table;
	}

 
  
console.log("Data" + data);
  console.log("Procesado" + JSON.parse(processedData));
data= JSON.parse(processedData);
var columnas=Object.keys(data[0]);  
  
	// render the table(s)
	tabulate(data, columnas); // 2 column table

});