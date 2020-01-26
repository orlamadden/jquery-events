$(document).ready(function() {

    // changes color of p tags when clicked
    $("p").click(function(){
        $("p").css('color', 'red');
    });

    // changes color of h2 tags when hovered
    $("h2").hover(function(){
        $("h2").css('color', 'lightblue');
    });

    // changes font size of particular h2 headings
    // and changes the other h2 headings back to
    //original size

    $("#head-html").hover(function(){
        $("#head-html").css('font-size', '2em');
        $("#head-sql").css('font-size', '1em');
        $("#head-python").css('font-size', '1em');
        $("#head-jquery").css('font-size', '1em');
        $("#head-django").css('font-size', '1em');
        $("#head-css").css('font-size', '1em');
    });

     $("#head-sql").hover(function(){
        $("#head-sql").css('font-size', '2em');
        $("#head-html").css('font-size', '1em');
        $("#head-python").css('font-size', '1em');
        $("#head-jquery").css('font-size', '1em');
        $("#head-django").css('font-size', '1em');
        $("#head-css").css('font-size', '1em');
    });

    $("#head-python").hover(function(){
        $("#head-sql").css('font-size', '1em');
        $("#head-html").css('font-size', '1em');
        $("#head-python").css('font-size', '2em');
        $("#head-jquery").css('font-size', '1em');
        $("#head-django").css('font-size', '1em');
        $("#head-css").css('font-size', '1em');
    });

    $("#head-jquery").hover(function(){
        $("#head-sql").css('font-size', '1em');
        $("#head-html").css('font-size', '1em');
        $("#head-python").css('font-size', '1em');
        $("#head-jquery").css('font-size', '2em');
        $("#head-django").css('font-size', '1em');
        $("#head-css").css('font-size', '1em');
    });

    $("#head-django").hover(function(){
        $("#head-sql").css('font-size', '1em');
        $("#head-html").css('font-size', '1em');
        $("#head-python").css('font-size', '1em');
        $("#head-jquery").css('font-size', '1em');
        $("#head-django").css('font-size', '2em');
        $("#head-css").css('font-size', '1em');
    });

    $("#head-css").hover(function(){
        $("#head-sql").css('font-size', '1em');
        $("#head-html").css('font-size', '1em');
        $("#head-python").css('font-size', '1em');
        $("#head-jquery").css('font-size', '1em');
        $("#head-django").css('font-size', '1em');
        $("#head-css").css('font-size', '2em');
    });

    $(".bottom_button").mouseenter(function() {
        $("body").css("background-color", "black");
    });

    $(".bottom_button").mouseleave(function(){
        $("body").css("background-color", "#eee");
    });


    $("#stream1_btn").on("click", function() {
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream1").addClass('highlight_stream');
   });
   $("#stream2_btn").on("click", function() {
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream2").addClass('highlight_stream');
   });
   $("#stream3_btn").on("click", function() {
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream3").addClass('highlight_stream');
   });

   // hides the first button slowly
   $('#button-effect').click(function() {
        $('#button-effect').hide('slow'); // hides button slowly
        $('#button-effect').hide('medium'); // hides button a little faster
        $('#button-effect').hide('fast'); // hides button faster
        $('#button-effect').hide(5000); // hides button with custom ms duration
   });

}); 