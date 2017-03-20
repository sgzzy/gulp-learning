import gulp from 'gulp';
import babel from 'gulp-babel';
import del from 'del';
import guil from 'gulp-util';
import browser from 'browser-sync';
import path from 'path';
import glob from 'glob';
// import uglify from 'gulp-uglify';
import webpack from 'gulp-webpack';
import myConfig from './webpack.config.js';

gulp.task('clean', function() { // 删除文件
  del(['dist/**/*', ]); // **/*为通配符
});

// 处理css文件
gulp.task('css', function() {
  const cssPath = './app/css/**/*.css';
  return gulp.src(cssPath, { base: 'app', })
    .pipe(gulp.dest('./dist/'));
});

// gulp.task('watch-css', ['css',], function() {
//   const cssPath = './app/css/**/*.css';
//   return gulp.watch(cssPath, ['css',]);
// });

// 处理js文件
gulp.task('js', function() {
  const jsPath = ['!./app/js/libs/**/*.js', './app/js/**/*.js', ];
  return gulp.src(jsPath, { base: 'app', })
    .pipe(babel())
    .pipe(gulp.dest('./dist/'));
});

// gulp.task('watch-js', ['js',], function() {
//   const jsPath = ['!./app/js/libs/**/*.js', './app/js/**/*.js',];
//   return gulp.watch(jsPath, ['js',]);
// });

// 处理html文件
gulp.task('html', function() {
  const htmlPath = './app/**/*.html';
  return gulp.src(htmlPath, { base: 'app', })
    .pipe(gulp.dest('dist/'));
});

gulp.task('watch', ['webpack'], function() {
  // 建立浏览器自动刷新服务器
  browser.init({
    server: {
      baseDir: 'dist',
    },
  });
  // 自动刷新
  gulp.watch('app/**', function(event) {
    if (/\.css$/.test(event.path)) {
      gulp.run('css');
    }
    if (/\.js$/.test(event.path)) {
      gulp.run('js');
    }
    if (/\.html$/.test(event.path)) {
      gulp.run('html');
    }
    gulp.run('webpack');
    browser.reload();
  });
});

// 用webpack打包js
gulp.task('webpack', ['js', 'css', 'html'], function() {
  return gulp.src('./dist/**/*')
    .pipe(webpack(myConfig))
    .pipe(gulp.dest('./dist/index/js/'));
});

// 获取入口js文件路径和文件名


function getEntry(globPath) {
  const files = glob.sync(globPath);
  let entries = {};
  files.forEach(function(filepath) {
    // 取倒数第二层(view下面的文件夹)做包名
    const split = filepath.split('/');
    let name = split[split.length - 1];
    name = name.replace('.js', '');
    guil.log(name);
    entries[name] = './' + filepath;
  });
  return entries;
}

// 测试用gulp任务

gulp.task('test', function() {
  getEntry('./app/index/**/*.html');
  guil.log(myConfig.entry);

});

// { 
//       entry: getEntry(),
//       output: {
//         path: path.join(__dirname, 'dist/js/index/'),
//         filename: '[name].js'
//       },
//       module: {
//         rules: [ // 加载器的集合
//           {
//             test: /\.js$/,
//             exclude: '/node_modules/',
//             use: ['babel-loader', 'eslint-loader', ],
//           },
//           {
//             test: /\.css$/,
//             use: ['style-loader', 'css-loader', ], // style为插入html的样式，css为href引入的样式
//           },
//         ],
//       },

//       devtool: 'source-map',

//     }
