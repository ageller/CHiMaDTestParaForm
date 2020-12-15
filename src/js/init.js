
//hide dropdowns when you click out
d3.select('body').on('click',function(){
	if (!event.target.parentNode.classList.contains('selectionWord')){ 
		d3.selectAll('select').classed('hidden', true);
	}
})

//bind the username getter
d3.select('#username').on("keyup",getUsername);


//define the params object that holds all the global variables and functions
defineParams();

//load data from the URL to define the form input
readURLdata();

//add the dropdowns for each selection word
createDropdowns();

//create the skeleton of the visualization (will be filled in at loadResponses)
createBars();

//load the responses and fill in the visualization (will need to make this a recurring call, and only executed after the first submit)
loadResponses(params.surveyFile);