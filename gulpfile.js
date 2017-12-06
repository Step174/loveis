var gulp = require('gulp');
var concatCss = require('gulp-concat-css');
var cleanCSS = require('gulp-clean-css');
var rename = require("gulp-rename");
var uncss = require('gulp-uncss');


 
gulp.task('build', function(){
	var buildCss = gulp.src([
        'css/main.css',
        'css/libs.min.css'
		])
	.pipe(gulp.dest(dist/css))

	var buildFonts = gulp.src('fonts/**/*')
	.pipe(gulp.dest('dist/fonts'))

	var buildJs = gulp.src('js/**/*')
	.pipe(gulp.dest('dist/js'))

	var buildHtml = gulp.src('app/*.html')
	.pipe(gulp.dest('dist'))
}) 
