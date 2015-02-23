/*jslint node: true*/
"use strict";

var
  gulp = require('gulp'),
  stylus = require('gulp-stylus'),
  minify = require('gulp-minify-css'),
  rename = require('gulp-rename');

gulp.task('default', ['compile']);

gulp.task('compile', function () {
  gulp.src('./styl/**/!(_)*.styl')
    .pipe(stylus())
    .pipe(gulp.dest('./css'))
    .pipe(minify())
    .pipe(rename(function (path) { path.extname = '.min.css'; }))
    .pipe(gulp.dest('./css'));
});

gulp.task('watch', ['compile'], function () {
  gulp.watch('./styl/**/*', ['compile']);
});