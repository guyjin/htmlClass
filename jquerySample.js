/**
 * Created by B.Vaughan on 7/22/2014.
 */
jQuery(document).ready(function ($) {

    $('p:nth-child(3)').addClass('red');
    $('body').addClass('loaded');
    $('.done').show('slow');
});

function getParagraphs() {
    console.log($('p')[3]);

}