var gulp = require('gulp');
var rimraf = require('rimraf');
var del = require('del')
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var eslint = require('gulp-eslint');

gulp.task('clean', function(){ // 删除文件
  del(['dist/**/*']); // **/*为通配符
});

gulp.task('lint', function() {
    // ESLint ignores files with "node_modules" paths.
    // So, it's best to have gulp ignore the directory as well.
    // Also, Be sure to return the stream from the task;
    // Otherwise, the task may end before the stream has finished.
    return gulp.src(['**/*.js','!node_modules/**'])
        // eslint() attaches the lint output to the "eslint" property
        // of the file object so it can be used by other modules.
        .pipe(eslint('eslintrc.js'))
        // eslint.format() outputs the lint results to the console.
        // Alternatively use eslint.formatEach() (see Docs).
        .pipe(eslint.format())
        // To have the process exit with an error code (1) on
        // lint error, return the stream and pipe to failAfterError last.
        .pipe(eslint.failAfterError());
});


gulp.task('minify', ['lint'], function() { // 压缩文件
  gulp.src('app/js/index.js') // 输入指定文件
      .pipe(gulp.dest('dist/')) // 输出文件到指定目录
      .pipe(uglify()) // 压缩文件
      .pipe(rename({ extname: '.min.js' })) // 给文件重命名
      .pipe(gulp.dest('dist/')); // 输出文件到指定目录
});



gulp.task('watch',['minify'],function(){
  gulp.watch('app/**/*.js');
});
