var gulp = require('gulp');
var less = require('gulp-less');
var minifyCSS = require('gulp-csso');
var concat = require('gulp-concat');

// gulp.task('default', function() {
//     console.log('123')
// });
gulp.task('default', ['css', 'js']);



gulp.task('css', function() {
    return gulp.src('./*.less')
    .pipe(less())
    // .pipe(minifyCSS())
    .pipe(gulp.dest('build/css'))
});

gulp.task('js', function() {
    return gulp.src(['./a.js','./b.js'])
    .pipe(concat('./test.js'))//文件名
    .pipe(gulp.dest('build/js'))
});

gulp.task('watch', function() {
    gulp.watch('./*.less', ['css']);
    gulp.watch('./*.js', ['js']);
})