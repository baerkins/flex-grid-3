const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cssnano = require('gulp-cssnano');
const mediaQuery = require('gulp-group-css-media-queries');
const rename = require('gulp-rename');

//
// SASS TASK
//
gulp.task('default', () => {

  return gulp.src( 'flexboxgrid.scss' )
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions', '> 2%', 'ie 10', 'iOS 8', 'iOS 9']
    }))
    .pipe(mediaQuery())
    .pipe(gulp.dest('./dest'))
    .pipe(cssnano())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('./dest'));
});