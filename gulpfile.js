var gulp = require("gulp"),
    sass = require("gulp-sass"),
    clean = require("gulp-clean"),
    min = require("gulp-minify"),
    rename = require("gulp-rename"),

var sassFiles = "VueJS-Practice/content/*.scss"
var cssFiles = ["!VueJS-Practice/content/*.css", "!VueJS-Practice/content/*.min.css", "VueJS-Practice/content/**/*.css"]
var destination = "VueJS-Practice/content"

gulp.task("default", function () {
    return gulp.src(sassFiles)
        .pipe(sass())
        .pipe(gulp.dest(destination));
})

gulp.task("clean", function () {
    return gulp.src(cssFiles)
        .pipe(clean());
})

gulp.task("minify", function () {
    return gulp.src("VueJS-Practice/content/*.css")
        .pipe(min())
        .pipe(rename({
            suffix: ".min"
        }))
        .pipe(gulp.dest("VueJS-Practice/content"));
})


