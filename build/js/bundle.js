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
document.addEventListener("DOMContentLoaded", function() {
    crear_galeria();
})

function crear_galeria() {
    const galeria = document.querySelector(".galeria-imagenes");

    for (let i = 1; i <= 12; i++) {
        const imagen = document.createElement("IMG");
        imagen.src = `build/img/thumb/${i}.webp`;
        imagen.dataset.imagenId = i;

        //añadir la funcion de mostrar imagenes
        imagen.onclick = mostrar_imagen;

        const lista = document.createElement("LI");
        lista.appendChild(imagen);

        galeria.appendChild(lista);
    }
}

function mostrar_imagen(evento) {
    const id = parseInt(evento.target.dataset.imagenId);

    //generar la imagen grande que aparece al clicar la imagen pequeña
    const imagen = document.createElement("IMG");
    imagen.src = `build/img/grande/${id}.webp`;

    const overlay = document.createElement("DIV");
    overlay.appendChild(imagen);
    overlay.classList.add("overlay");

    //Presionando fuera del overlay se cierra la imagen
    overlay.onclick = function() {
            overlay.remove();
        }
        //Boton para cerrar la imagen
    const cerrar_imagen = document.createElement("P");
    cerrar_imagen.textContent = "X";
    cerrar_imagen.classList.add("boton-cerrar");

    //Cuando se presiona boton => se cierra la imagen grande
    cerrar_imagen.onclick = function() {
        overlay.remove();
    }


    overlay.appendChild(cerrar_imagen);

    //Mostrar en el Html
    const body = document.querySelector("body");
    body.appendChild(overlay);
    body.classList.add("fijar-body");

}