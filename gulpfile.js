/*jslint node: true */

var gulp = require('gulp'),
    CSSPreprocessor = require('gulp-sass'),
    JSCompressor = require('gulp-uglify'),
    browserSpecificPrefixGenerator = require('gulp-autoprefixer'),
    filenames = {
        styles: 'style.scss',
        javascript: 'main.js'
    },
    baseFolders = {
        source: {
            styles: {
                sass: 'sass/'
            },
            javascript: 'js/'
        },
        target: {
            styles: {
                css: 'css/'
            },
            javascript: 'js/'
        }
    };

/**
 * COMPILE CSS
 */
gulp.task('compileCSS', function () {
    gulp.src(baseFolders.source.styles.sass + filenames.styles)
        .pipe(new CSSPreprocessor().on('error', CSSPreprocessor.logError))
        .pipe(new CSSPreprocessor({
            outputStyle: 'compressed',
            precision: 10
        }))
        .pipe(browserSpecificPrefixGenerator({browsers: ['last 2 versions']}))
        .pipe(gulp.dest(baseFolders.target.styles.css));
});

/**
 * COMPRESS JAVASCRIPT
 */
gulp.task('compressJS', function () {
    'use strict';

    return gulp.src([baseFolders.source.javascript + filenames.javascript])
        .pipe(new JSCompressor())
        .pipe(gulp.dest(baseFolders.target.javascript));
});

/**
 * DEFAULT
 */
gulp.task('default', ['compileCSS', 'compressJS']);
