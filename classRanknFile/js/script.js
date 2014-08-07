$(function() {
    setupStars();
    setupForm();
})

function setupStars() {
    $('.stars .star').on('mouseover', function() {
        fillStar($(this));
    });

    $('.stars .star').on('mouseout', function() {
        emptyStar($(this));
    })

    $('.stars .star').on('click', function() {
        setRating($(this));
    })
}

function setupForm() {
    $('form').on('submit', function(event){
        event.preventDefault();
        processNewItem();
    })
}

function processNewItem() {
    var text = $('#firstItemName').val();
    var rating = $('.stars .rated').length;
    addItem(text,rating);
}

function addItem(text,rating) {
    $('.template tr').clone().appendTo('#items tbody');
    $('#items tbody tr:last-child td.itemText').text(text);
    var newRating = $('#items tbody tr:last-child td.rating .star');
    for(var i = rating - 1; i >= 0; i--) {
        $(newRating[i]).addClass('rated');
    }
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
    star.removeClass('rated');
    star.addClass('rated')
    star.prevAll().addClass('rated');
}