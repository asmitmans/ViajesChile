$(document).ready(function(){
    // Cierra el menú desplegable al hacer clic en un enlace del menú
    $('.navbar-nav>li>a').on('click', function(){
        $('.navbar-collapse').collapse('hide');
    });
});

// Función para mostrar u ocultar el botón dependiendo de la posición de desplazamiento
window.onscroll = function() { mostrarBoton() };

function mostrarBoton() {
    var botonVolverInicio = document.getElementById("botonVolverInicio");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        botonVolverInicio.style.display = "block";
    } else {
        botonVolverInicio.style.display = "none";
    }
}

// Función para hacer que la página vuelva al inicio
function volverAlInicio() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// Enable tooltips
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))