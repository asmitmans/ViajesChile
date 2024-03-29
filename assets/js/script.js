$(document).ready(function(){


	// Cierra el menú desplegable al hacer clic en un enlace del menú
    $('.navbar-nav>li>a').on('click', function(){
        $('.navbar-collapse').collapse('hide');
    });


	$('#formulario').submit(function(event) {
        // Detener el envío del formulario
        event.preventDefault();

        // Validar los campos del formulario
        var nombre = $('#inputName').val();
        var asunto = $('#inputAsunto').val();
        var mensaje = $('#inputMensaje').val();

        
        if (nombre === '' || asunto === '' || mensaje === '') {
            appendAlert('Debes ingresar todos los campos para enviar el mensaje', 'danger');
			// Función para desaparecer las alertas después de 3 segundos
            setTimeout(function() {
                $(".alert").alert('close');
            }, 3000);

        } else {
            appendAlert('Mensaje enviado exitosamente', 'success');

            // Función para desaparecer las alertas después de 3 segundos
            setTimeout(function() {
                $(".alert").alert('close');
            }, 3000);
        }
    });


	 // Smooth scroll al hacer clic en enlaces del menú
	 $('.navbar-nav>li>a').on('click', function(event) {
        if (this.hash !== '') {
            event.preventDefault();
            var hash = this.hash;
            var offset = 55; // Ajusta este valor según sea necesario
            $('html, body').animate({
                scrollTop: $(hash).offset().top - offset
            }, 500);
        }
    });

});


const alertPlaceholder = document.getElementById('liveAlertPlaceholder');
const appendAlert = (message, type) => {
	const wrapper = document.createElement('div')
	wrapper.innerHTML = [
	  `<div class="alert alert-${type} alert-dismissible alert-custom-${type}" role="alert">`,
	  `   <div>${message}</div>`,
	  '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
	  '</div>'
	].join('')
  
	alertPlaceholder.append(wrapper)
}


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
