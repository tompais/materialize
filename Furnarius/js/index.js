var mensaje = $("#textarea1");
var email = $("#email-msj");
var nombre = $("#first_name");
var regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

$(document).ready(function () {

    //inicializamos el dropdown
    $('.dropdown-trigger').dropdown();

    //aplicamos parallax
    $('.parallax').parallax();

    //invocamos el carousel
    setCarousel();

    //activamos el modal
    $('.modal').modal();

    //validaciones para el envío del formulario
    $("#enviar").click(function(){
        if(mensaje.val() == "" ||
        email.val() == "" ||
        nombre == ""){
            $("#advertencia").css("display","block");
            exit();
        }
        if(mensaje.val() != "" &&
        email.val() != "" &&
        nombre.val() != ""){
            $("#advertencia").css("display","none");
        }
        if(email.val() != "" && !regexEmail.test(email.val())){
            $("#advertenciaEmail").css("display","block");
            exit();
        }
        else{
            $("#advertenciaEmail").css("display","none");
        }
        $("#correcto").css("display","block");
        setTimeout(function(){$("#correcto").css("display","none")},5000);
    });
});


function setCarousel() {
    $('.carousel').carousel({
        duration: 200,
        dist: 0,
        fullWidth: false,
        indicators: false,
        shift: 0,
        padding: 10,
        numVisible: 5,
    });
}

$(window).resize(function () {
    setCarousel();
});

setInterval(function () {
    $('.carousel').carousel('next');
}, 4500);
