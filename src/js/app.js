document.addEventListener("DOMContentLoaded", function() {
    scroll_nav();

    navegacion_fija();
})

// function navegacion_fija() {

//     const barra = document.querySelector(".header");
//     //registrando el intersection observer
//     const observer = new IntersectionObserver(function(entries) {
//         if (entries[0].isIntersecting) {
//             barra.classList.remove("fijo");
//             console.log(entries[0]);
//         } else {
//             barra.classList.add("fijo");
//             console.log(entries[0]);
//         }
//     });



//     // registrando el elemento a observar
//     observer.observe(document.querySelector(".video"));
// }

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