// import gulp from 'gulp';
// import babel from 'gulp-babel';
// import del from 'del';

var gulp  = require('gulp');
var del   = require('del');
var babel = require('gulp-babel');

gulp.task('default', () => {
  return gulp.src('src/**/*.js')
    .pipe(babel())
    .pipe(gulp.dest('lib'));
});

gulp.task('clean', function() { // 删除文件
  del(['dist/**/*']); // **/*为通配符
});