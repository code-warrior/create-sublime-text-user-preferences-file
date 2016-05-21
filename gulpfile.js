/*jslint node: true */

'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSpecificPrefixGenerator = require('gulp-autoprefixer');

/**
 * COMPILE CSS
 */
gulp.task('compileCSS', function () {
    gulp.src('sass/style.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(sass({
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
