import gulp from 'gulp';
import babel from 'gulp-babel';
import del from 'del';
// import uglify from 'gulp-uglify';
import webpack from 'gulp-webpack';
import myConfig from './webpack.config.js';
gulp.task('clean', function() { // 删除文件
  del(['dist/**/*']); // **/*为通配符
});

gulp.task('develop', function() {
  // 将第三方库copy到dist文件夹
  gulp.src('./app/js/libs/**/*', { base: 'app' })
    .pipe(gulp.dest('./dist/'));

  // 将自己写的js文件copy到dist
  gulp.src('./app/js/views/**/*', { base: 'app' })
    .pipe(babel())
    .pipe(gulp.dest('./dist/'));

  // copy css文件
  gulp.src('./app/css/**/*', { base: 'app' })
    .pipe(gulp.dest('./dist/'));

  // copy html文件
  gulp.src('./index.html')
    .pipe(gulp.dest('./dist/'));
});

gulp.task('watch-html', function() {
  const watchPath = './index.html';
  return gulp.watch(watchPath, function() {
    gulp.src(watchPath)
      .pipe(gulp.dest('./dist/'));
  });
});

gulp.task('watch-module', function() {
  const watchPath = [
    './app/js/**/*',
    './app/css/**/*',
  ];
  gulp.watch(watchPath, function(event) {
    const reg = /\\/g;
    const distPath = event.path.replace(reg, '/').split('app')[1];
    gulp.src(event.path)
      .pipe(gulp.dest('./dist' + distPath));
  });
});

gulp.task('webpack', ['develop', 'watch-module', 'watch-html'], function() {
  gulp.src('app/js/views/*.js')
    // .pipe(webpack({
    //   output: { filenaem: 'bundle.js' },
    //   module: {
    //     rules: [ // 加载器的集合
    //       // {
    //       //   test: /\.html$/,
    //       //   loader: 'html-loader',
    //       // },
    //       {
    //         test: /\.js$/,
    //         exclude: ['/node_modules/', '/jquery/'],
    //         use: ['babel-loader', 'eslint-loader', ]
    //       },
    //       // {
    //       //   test: /\.css$/,
    //       //   use: ['style-loader', 'css-loader'], // style为插入html的样式，css为href引入的样式
    //       // },
    //     ],
    //   },
    // }))
    .pipe(webpack(Object.create(myConfig)))
    .pipe(gulp.dest('./dist/js/views/'));

});
