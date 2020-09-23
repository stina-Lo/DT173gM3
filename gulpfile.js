const { src, dest, watch, series, parallel} = require("gulp");
const concat = require("gulp-concat");
const uglify = require("gulp-uglify-es").default;
const csso = require('gulp-csso');
const sourcemaps = require('gulp-sourcemaps');
const livereload = require('gulp-livereload');
const sass = require('gulp-sass');

sass.compiler = require('node-sass');

/*Search path*/
const files = {
    htmlPath: "src/**/*.html",
    cssPath: "src/**/*.css",
    jsPath: "src/**/*.js",
    imgPath: "src/img/*",
    sassPath: "src/sass/mySass.scss"
}
 
function sourcemapsJsTask() {
    return src(files.jsPath).pipe(sourcemaps.init()).pipe(sourcemaps.write()).pipe(dest('dist'));
}
function sourcemapsCSSTask() {
    return src(files.cssPath).pipe(sourcemaps.init()).pipe(sourcemaps.write()).pipe(dest('dist'));
}
function sourcemapsHTMLTask() {
    return src(files.htmlPath).pipe(sourcemaps.init()).pipe(sourcemaps.write()).pipe(dest('dist'));
}
function sourcemapsImgTask() {
    return src(files.imgPath).pipe(sourcemaps.init()).pipe(sourcemaps.write()).pipe(dest('dist'));
}

function sourcemapsscssTask() {
    return src(files.sassPath).pipe(sourcemaps.init()).pipe(sourcemaps.write()).pipe(dest('dist'));
}


/*copy to HTML-files*/
function copyHTML() {
    return src(files.htmlPath).pipe(dest('pub')).pipe(livereload());

}

/*concatinate and minify js files*/
function jsTask() {
    return src(files.jsPath).pipe(concat('main.js')).pipe(uglify()).pipe(dest('pub/js')).pipe(livereload());
}

/*Sammanslår alla css filer under css path till filen pub/css/styles.css*/

function cssTask() {
    return src(files.cssPath).pipe(concat('styles.css')).pipe(csso()).pipe(dest('pub/css')).pipe(livereload());
}

function imgTask() {
    return src(files.imgPath).pipe(dest('pub/img')).pipe(livereload());
}
/*Task: SASS */

function sassTask() {
    return src(files.sassPath).pipe(sass().on('error', sass.logError)).pipe(concat('mySass.css')).pipe(dest('src/css')).pipe(livereload());
}

/*Watcher function*/
function watchTask() {
    livereload.listen();
    watch([files.htmlPath, files.jsPath, files.sassPath, files.cssPath, files.imgPath, files.jsPath, files.htmlPath, files.cssPath, files.imgPath, files.sassPath],
        parallel(copyHTML, jsTask, sassTask, cssTask, imgTask, sourcemapsJsTask, sourcemapsHTMLTask, sourcemapsCSSTask, sourcemapsImgTask, sourcemapsscssTask));
}

/*make available externaly*/
exports.default = series(
    parallel(copyHTML, jsTask, sassTask, cssTask, imgTask, sourcemapsJsTask, sourcemapsHTMLTask, sourcemapsCSSTask, sourcemapsImgTask),
    watchTask
);

