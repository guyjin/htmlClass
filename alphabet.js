jQuery(document).ready(function($) {
    console.log($('#abcbox').val())
    $('#button1').click(function() {
        $('#abcbox').val('');
        abc();
    });
    $('#button2').on('click', function() {
        $('body').toggleClass('wow');
    })
});

/**
 * Created by Ben Vaughan on 7/10/2014.
 */

// split the alphabet, display every other letter.
// Every third letter that is display needs to be capitalized.



function abc() {
    var abc = 'abcdefghijklmnopqrstuvwxyz';
    var arr = abc.split('');
    var t = 1;
    var content ='';
    for (i = 0; i < arr.length; i++) {


        if (i % 2 === 0) {
            if (t === 3) {
                console.log(arr[i].toUpperCase());
                // document.write(arr[i].toUpperCase() + ", ");
                content = content + arr[i].toUpperCase() + ", ";
                t = 1;
            } else {
                console.log(arr[i]);
                // document.write(arr[i] + ", ");
                content = content + arr[i] + ", ";
                t++;
            }
        }
    }

    console.log(content);
    $('#abcbox').val(content);
}

