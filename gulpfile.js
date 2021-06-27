const { series, src, dest, watch, parallel } = require("gulp"); // cuando hay llaves significa que el paquete tiene multipleas funciones
const sass = require("gulp-sass"); // cuando no hay llaves significa que hay solo una funcion
const imagemin = require("gulp-imagemin");
const notify = require("gulp-notify");

// Funcion que compila sass

function css() {
    return src("src/scss/app.scss")
        .pipe(sass())
        .pipe(dest("./build/css"))
}

function minificarcss() {
    return src("src/scss/app.scss")
        .pipe(sass({
            outputStyle: "compressed"
        }))
        .pipe(dest("./build/css"))
}

function imagenes() {
    return src("src/img/**/*")
        .pipe(imagemin())
        .pipe(dest("./build/img"))
        .pipe(notify({ message: "Imagen Minificada" }))
}

function watch_archivo() {
    watch("src/scss/**/*.scss", css);
}



exports.css = css;
exports.minificarcss = minificarcss;
exports.imagenes = imagenes;
exports.watch_archivo = watch_archivo;

exports.default = series(css, imagenes, watch_archivo);