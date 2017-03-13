var gulp = require('gulp');
var rimraf = require('rimraf');
var del = require('del');
var browser = require('browser-sync');
var es2015 = require('babel-preset-es2015');
var babel = require('gulp-babel');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var eslint = require('gulp-eslint');
var concat = require('gulp-concat');
var cleanCss = require('gulp-clean-css');
var webpack = require('gulp-webpack');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('clean', function() { // 删除文件
  del(['dist/**/*']); // **/*为通配符
});

gulp.task('dev', function() {
  browser.init({
    server: './dist'
  });
  gulp.watch(['app/**/*.html', 'app/js/*.js', 'app/css/*.css'], ['default'])
    .on('onchange', browser.reload);
})

gulp.task('default', function() { // 将es6规则的js文件转换为es5规则的js文件
  gulp.src('app/js/**/*.js') // 输入指定文件
    .pipe(babel({ presets: [es2015] })) // 将es6文件转码为es5文件
    .pipe(sourcemaps.init())
    .pipe(concat('bundle.js')) // 将所有js文件合成一个js文件
    .pipe(webpack({ // 使用webpack打包
      output: {
        filename: './dist/bundle.js'
      },
      stats: {
        colors: true
      }
    }))
    .pipe(gulp.dest('dist/')) // 输出文件到指定目录
    .pipe(uglify()) // 压缩文件
    .pipe(rename({ extname: '.min.js' })) // 给文件重命名
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist/')); // 输出文件到指定目录

  gulp.src('app/js/**/*.js') // 输入指定文件
    .pipe(sourcemaps.init())
    .pipe(concat('bundle.js'))
    .pipe(gulp.dest('dist/')) // 输出文件到指定目录
    .pipe(uglify()) // 压缩文件
    .pipe(rename({ extname: '.min.js' })) // 给文件重命名
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist/')); // 输出文件到指定目录

  gulp.src('app/**/*.html')
    .pipe(gulp.dest('dist/'));

  gulp.src('app/images/**/*')
    .pipe(gulp.dest('dist/images/'));

  gulp.src('app/css/**/*.css')
    .pipe(concat('main.css'))
    .pipe(gulp.dest('dist/'))
    .pipe(cleanCss())
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('dist/'));
});

gulp.task('lint', function() { // 对js文件进行eslint检查
  // ESLint ignores files with "node_modules" paths.
  // So, it's best to have gulp ignore the directory as well.
  // Also, Be sure to return the stream from the task;
  // Otherwise, the task may end before the stream has finished.
  return gulp.src(['**/*.js', '!node_modules/**'])
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

// gulp.task('minify', ['lint'], function() { // 压缩文件
//   gulp.src('app/js/**/*.js') // 输入指定文件
//     .pipe(sourcemaps.init())
//     .pipe(concat('bundle.js'))
//     .pipe(gulp.dest('dist/')) // 输出文件到指定目录
//     .pipe(uglify()) // 压缩文件
//     .pipe(rename({ extname: '.min.js' })) // 给文件重命名
//     .pipe(sourcemaps.write())
//     .pipe(gulp.dest('dist/')); // 输出文件到指定目录
// });

// gulp.task('watch', ['minify'], function() { // 监视所有app下的js文件
//   gulp.watch('app/**/*');
// });

// gulp.task('copyHtml', function() {

// });

// gulp.task('copyImage', function() {

// });

// gulp.task('cleanCss', function() {

// });
