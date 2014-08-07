$(function() {
    init();
})

var items = '';

function init() {
    // setup basic listners
    $('.stars .star').on('mouseover', function() {
        fillStar($(this));
    });

    $('.stars .star').on('mouseout', function() {
        emptyStar($(this));
    })

    $('.stars .star').on('click', function() {
        setRating($(this));
    })
    $('form').on('submit', function(event){
        event.preventDefault();
        processNewItem();
    });
    $('form').on('reset', function(event){
        event.preventDefault();
        resetForm();
    })
    $('#items').on('click', function(event){
        var t = event.target;
        if($(t).hasClass('glyphicon-remove')){
            $(t).closest('tr').remove();
        }
    })

    // get or setup localstorage

    if(localStorage && localStorage.length > 0) {

    } else {
        var a = [];
        localStorage.setItem('items',JSON.stringify(a));
    }

//    populateList();
}

// build the entire list based on the contents of localStorage
function populateList() {
    items = JSON.parse(localStorage.getItem('items'));
    if(items.length > 0) {
        for (var i = 0; i <= items.length -1 ; i++) {
            // insert the Todo into the html list.
            processNewItem(items[i]['item'],items[i]['id'],items[i]['rating']);
        };
    }



}

function processNewItem() {
    var text = $('#firstItemName').val();
    var rating = $('.stars .rated').length;
    var id = util.save(text,rating);
    addItem(text,rating,id);
}

function addItem(text,rating) {

    $('.template tr').clone().appendTo('#items tbody');
    $('#items tbody tr:last-child td.itemText').text(text);
    var newRating = $('#items tbody tr:last-child td.rating .star');
    for(var i = rating - 1; i >= 0; i--) {
        $(newRating[i]).addClass('rated');
    }
    resetForm();
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

function resetForm() {
    $('#firstItemName').val('');
    $('.stars .star').removeClass('rated');
}

var util = {
    uuid: function() {
        var i, random, uuid;
        for (i = 0; i < 32; i++) {
            random = Math.random() * 16 | 0;
            if (i === 8 || i === 12 || i === 16 || i === 20) {
                uuid += '-';
            }
            uuid += (i === 12 ? 4 : (i === 16 ? (random & 3 | 8) : random)).toString(16);
        }

        return uuid;
    }, 
    save: function(item,rating) {
        console.log('save', item, rating);
            var item = item;
            var id = util.uuid();
            var rating = rating;
            var itemEntry = {
                'id':id,
                'item':item,
                'rating':rating
            }

            items = [];
                if (localStorage.getItem('items') === null) {
                    items = [];
                } else {
                    // Parse the serialized data back into an array of objects
                    items = JSON.parse(localStorage.getItem('items'));
                }

            // Push the new data (whether it be an object or anything else) onto the array
            items.push(itemEntry);
            // Re-serialize the array back into a string and store it in localStorage
            localStorage.setItem('items', JSON.stringify(items));

            return id;
    }
}