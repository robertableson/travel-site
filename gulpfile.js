var gulp = require('gulp');
var watch = require('gulp-watch');

gulp.task('default', function(){
  console.log("LOLOLOLOLOLO");
});

gulp.task('html', function(){
  console.log("imagine lol");
});

gulp.task('styles', function(){
  console.log("Styles ftw");
});

gulp.task('watch', function(){
  watch('./app/index.html', function(){
    gulp.start('html');
  });

  watch('./app/assets/styles/**/*.css', function(){
    gulp.start('styles');
  });
});
