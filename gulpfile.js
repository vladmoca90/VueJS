var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('VueJS-Practice/content', function() {
    gulp.src('VueJS-Practice/content/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./VueJS-Practice/content/**/*'))
});

//Watch task
gulp.task('default',function() {
    gulp.watch('VueJS-Practice/content/**/*.scss',['VueJS-Practice/content']);
});