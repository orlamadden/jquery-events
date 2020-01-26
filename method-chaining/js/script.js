$(document).ready(function() {

    // method chaining practice

    $('#button1').mouseenter(function(){
        $('#button1').removeClass('makeRed').addClass('makeBorder');
    });

     $('#button1').mouseleave(function(){
        $('#button1').addClass('makeRed').removeClass('makeBorder');
    });

    $('#button2').click(function() {
        $('p').hide(2000).show(1000);
    });

    $('#button3').click(function() {
        $('p').fadeOut().fadeIn();
    });

}); 
