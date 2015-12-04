$(function () {
	 //it initializes 'sum' and 'space' variables
   sum = 0;
   space = 0;
   //it permits drag with 'dragNumber' function
   dragNumber();
});

//function to drag numbers
var dragNumber = function(){
	//it permits to drag numbers
	$('.number').draggable({ 
		//it clones the numbers
		helper: 'clone',
	});
	//it permits to drop the numbers
  $('#cardSlots').droppable({
  	drop: function (e, ui){
  		//it evaluates if 'cardSlots' id has only 10 numbers
  		if (space < 10){
  			//it gets the value of number dragged
	  		var value = ui.draggable.attr('value');
	  		//it adds value of numbers dragged
	  		sum = sum + parseInt(value);
	  		//'space' variable is increased
	  		space += 1;
	  		//it gets the clone of number dragged
	  		var duplicate = ui.draggable.clone();
	  		//it appends clone of number dragged
	  		$(this).append(duplicate);
	  		//it appends 'sum' variable
	  		$('#total_sum').text(sum);
  	  }
  	}
  })
}
