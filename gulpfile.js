/*jslint node: true */

var gulp = require('gulp'),
    CSSPreprocessor = require('gulp-sass'),
    browserSpecificPrefixGenerator = require('gulp-autoprefixer');

/**
 * COMPILE CSS
 */
gulp.task('compileCSS', function () {
    gulp.src('sass/style.scss')
        .pipe(new CSSPreprocessor().on('error', CSSPreprocessor.logError))
        .pipe(new CSSPreprocessor({
            outputStyle: 'compressed',
            precision: 10
        }))
        .pipe(browserSpecificPrefixGenerator({browsers: ['last 2 versions']}))
        .pipe(gulp.dest('css'));
});

/**
 * DEFAULT
 */
gulp.task('default', ['compileCSS']);
