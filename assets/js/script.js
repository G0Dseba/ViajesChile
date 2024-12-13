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
    $("#enviar").click(function () {
        alert("El formulario fue enviado correctamente...");
    });
});

//cambio color a azul
$(document).ready(function () {
    $("#quien").on("dblclick", function () {
        $(this).css("color", "blue");
    });
});

//cambio color a rojo
$(document).ready(function () {
    $("#destacados").on("dblclick", function () {
        $(this).css("color", "red");
    });
});

//cambio color a amarillo
$(document).ready(function () {
    $("#contacto").on("dblclick", function () {
        $(this).css("color", "yellow");
    });
});