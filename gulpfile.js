var gulp = require('gulp');
var watch = require('gulp-watch');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssvars = require('postcss-simple-vars');
var nested = require('postcss-nested');

gulp.task('default', function(){
  console.log("LOLOLOLOLOLO");
});

gulp.task('html', function(){
  console.log("imagine lol");
});

gulp.task('styles', function(){
  return gulp.src('./app/assets/styles/styles.css') //use this file...
    .pipe(postcss([cssvars, nested, autoprefixer])) //manipulate with the following...
    .pipe(gulp.dest('./app/temp/styles'));          //and copy to destination
});

gulp.task('watch', function(){
  watch('./app/index.html', function(){
    gulp.start('html');
  });

  watch('./app/assets/styles/**/*.css', function(){
    gulp.start('styles');
  });
});
