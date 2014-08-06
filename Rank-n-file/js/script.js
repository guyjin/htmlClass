$(function() {
	rowCheck();
	modalSetup();
});


var rowCount = 1;

function rowCheck() {
	var x = $('#items tbody tr').length;
	if(x === 0) {
		$('#noitems').fadeIn();
		$('#firstItem').on('submit', function(event) {
			event.preventDefault();
			$('#noitems').fadeOut('slow',processFirstNewItem);
		})
	} else {
		enableAdder();
		$('#items').fadeIn();
	}
}

function processFirstNewItem() {
	var text = $('#newitem').val();
	var rating = $('#firstItem .stars .rated').length;
	addItem(text,rating);
	enableAdder();
	$('#items').fadeIn();
}

function processNewItem() {
	var text = $('#newItemToAdd').val();
	var rating = $('.modal .stars .rated').length;
	addItem(text,rating);
	return true;
}

function enableAdder() {
	$('#mainAddItemBtn').attr('disabled',false).focus();
}


function modalSetup() {
	$(".modal").on('shown.bs.modal', function() {
	        $(this).find("[autofocus]:first").focus();
	    });
	$('.modal-footer .btn-primary').on('click', function(event){
		if(processNewItem()){
			$('#newItemModal').modal('hide');	

		}		
	});
	$('.modal').on('hide.bs.modal', function() {
		$('#newItemModal input').val('');
		$('.modal .star').removeClass("rated");
	})
	$('.stars .star').on('mouseover', function(){
		fillStar($(this));
	})
	$('.stars .star').on('mouseout', function() {
		emptyStar($(this));
	})
	$('.stars .star').on('click', function() {
		setRating($(this));
	})
}

function addItem(text,rating) {
	console.log(rating);
	$('.template tr').clone().appendTo('#items tbody');			
	$('#items tbody tr:last-child td.rowNo').text(rowCount++);
	$('#items tbody tr:last-child td.itemText').text(text);
	var newRating = $('#items tbody tr:last-child td.rating .star');
	for (var i = rating - 1; i >= 0; i--) {
	 	$(newRating[i]).addClass('rated');
	 }; 
	
}

function fillStar(star) {
	star.addClass('filled');
	star.prevAll().addClass('filled');
}

function emptyStar(star) {
	star.removeClass('filled');
	star.prevAll().removeClass('filled');
}

function setRating(star) {
	star.siblings().removeClass('rated');
	star.removeClass('rated')
	star.addClass('rated');
	star.prevAll().addClass('rated');
}