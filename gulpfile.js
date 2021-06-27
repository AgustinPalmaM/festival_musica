const { series, src, dest, watch, parallel } = require("gulp"); // cuando hay llaves significa que el paquete tiene multipleas funciones
const sass = require("gulp-sass"); // cuando no hay llaves significa que hay solo una funcion
const imagemin = require("gulp-imagemin");
const notify = require("gulp-notify");
const webp = require("gulp-webp");

// Funcion que compila sass

const paths = {
    imagenes: "src/img/**/*",
    scss: "src/scss/**/*.scss"
}

function css() {
    return src(paths.scss)
        .pipe(sass())
        .pipe(dest("./build/css"))
}

function minificarcss() {
    return src(paths.scss)
        .pipe(sass({
            outputStyle: "compressed"
        }))
        .pipe(dest("./build/css"))
}

function imagenes() {
    return src(paths.imagenes)
        .pipe(imagemin())
        .pipe(dest("./build/img"))
        .pipe(notify({ message: "Imagen Minificada" }))
}

function version_webp() {
    return src(paths.imagenes)
        .pipe(webp())
        .pipe(dest("./build/img"))
        .pipe(notify({ message: "Version webp lista" }))
}

function watch_archivo() {
    watch(paths.scss, css);
}



exports.css = css;
exports.minificarcss = minificarcss;
exports.imagenes = imagenes;
exports.watch_archivo = watch_archivo;

exports.default = series(css, imagenes, version_webp, watch_archivo);