$(document).ready(function() {

    // method chaining practice

    $('#button1').mouseenter(function(){
        $('#button1').removeClass('makeRed').addClass('makeBorder');
    });

     $('#button1').mouseleave(function(){
        $('#button1').addClass('makeRed').removeClass('makeBorder');
    });

}); 
