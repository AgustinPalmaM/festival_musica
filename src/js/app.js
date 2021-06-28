document.addEventListener("DOMContentLoaded", function() {
    scroll_nav();
})

function scroll_nav() {
    const enlaces = document.querySelectorAll(".navegacion-principal a");

    enlaces.forEach(function(enlace) {
        enlace.addEventListener("click", function(evento) {
            evento.preventDefault();

            const seccion = document.querySelector(evento.target.attributes.href.value);
            seccion.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

}