var gulp = require('gulp'),
    uglify = require('gulp-uglifyjs'),
    rename = require('gulp-rename');


gulp.task('default', function (callback) {
 	
 	// Default action, show gulp help list
	gulp.start('build').on('end', callback); 
 
});


// Dynamically watching the changes from us
gulp.task('watch', function () {

    gulp.watch('./src/zoomage.js', ['build']); 

});

gulp.task('build', function(callback) {

    gulp.src('zoomage.js')
        .pipe(uglify())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./dist'));    

});