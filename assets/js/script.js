$(document).ready(function () {
    $('#customCarousel').carousel(); 

    $('.prev-btn').on('click', function () {
        $('#customCarousel').carousel('prev'); 
    });

    $('.next-btn').on('click', function () {
        $('#customCarousel').carousel('next'); 
    });
});