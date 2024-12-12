//Carrousel
$(document).ready(function () {
    $('#customCarousel').carousel(); 

    $('.prev-btn').on('click', function () {
        $('#customCarousel').carousel('prev'); 
    });

    $('.next-btn').on('click', function () {
        $('#customCarousel').carousel('next'); 
    });
});

//tooltip con de correo
document.addEventListener('DOMContentLoaded', function(){
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
    $("#enviarCorreo").click(function () {
        alert("El formulario fue enviado correctamente...");
    });
});