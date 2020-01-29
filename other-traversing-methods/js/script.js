$(document).ready(function(){
 // when a colored button is clicked, hide all panels
    $('.theButton').click(function() {
        $('#panel .container').siblings().hide();
    });

    $('.theButton').click(function() {
        $('#panel .container').siblings().fadeTo(1000, 0.5);
    });

    $('.theButton').click(function() {
        $(this).hide();
    });


    // resets all buttons back to normal
    $('.superButton').click(function() {
        $('#panel .container').siblings().fadeTo(1000, 1);
    });

    // $('.theButton').mouseenter(function () {
    //     $(this).addClass('makeBlack');
    // });

    // $('.theButton').mouseleave(function () {
    //     $(this).removeClass('makeBlack');
    // });

    // changes reset text to color of button pushed
    $('.theButton').click(function() {
        const panelCol = $(this).css('background-color');
        $('.superButton').text(panelCol);
    });

});