/*jslint node: true */

var gulp = require('gulp'),
    CSSPreprocessor = require('gulp-sass'),
    browserSpecificPrefixGenerator = require('gulp-autoprefixer'),
    filenames = {
        styles: 'style.scss'
    },
    baseFolders = {
        source: {
            styles: {
                sass: 'sass/'
            }
        },
        target: {
            styles: {
                css: 'css/'
            }
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
 * DEFAULT
 */
gulp.task('default', ['compileCSS']);
