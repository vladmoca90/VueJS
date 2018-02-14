var gulp = require("gulp"),
    sass = require("gulp-sass"),
    clean = require("gulp-clean"),
    min = require("gulp-uglifycss"),
    rename = require("gulp-rename"),
    concat = require("gulp-concat")

var sassFiles = "styles/**/*.scss"
var cssFiles = ["!styles/site.css", "!styles/site.min.css", "styles/**/*.css"]
var destination = "styles"

gulp.task("default", function() {
    return gulp.src(sassFiles)
        .pipe(sass())
        .pipe(gulp.dest(destination));
})

gulp.task("clean", function() {
    return gulp.src(cssFiles)
        .pipe(clean());
})

gulp.task("uglify", function() {
    return gulp.src("styles/site.css")
        .pipe(min())
        .pipe(rename({
            suffix: ".min"
        }))
        .pipe(gulp.dest("styles"));
})

gulp.task("concat", function() {
    return gulp.src("scripts/**/*.js")
        .pipe(concat("bundle.js"))
        .pipe(gulp.dest("bundle"));
})