var gulp = require('gulp');
var less = require('gulp-less')
var sass = require('gulp-sass');

gulp.task('build',['copy-html','copy-images','copy-other'],function(){
    console.log('build suceess');
})


gulp.task('copy-html',function(){
    return gulp.src('app/index.html').pipe(gulp.dest('dist'))
})

/**
 * 复制图片
 */
gulp.task('copy-images',function(){
    return gulp.src('app/imgs/*.{jpg,png}').pipe(gulp.dest('dist'));
});

/**
 * 匹配多个目录 glob
 * 可以填写一个数组
 *
 */
gulp.task('copy-other',function(){
    return gulp.src(['app/css/*.css','app/js/*.js'],{base:'app'}).pipe(gulp.dest('dist'));
});

gulp.task('less',function(){
    return gulp.src('app/less/*.less').pipe(less()).pipe(gulp.dest('dist/css'))
})

gulp.task('sass',function(){
    return gulp.src('app/sass/*.scss').pipe(sass()).pipe(gulp.dest('dist/css'));
});

//在执行watch的时候会监控index.html文件的变化，发生变化后可以执行拷贝html的任务
/*gulp.task('default',function(){
    gulp.watch('app/index.html',['copy-html']);
    gulp.watch('app/imgs/!**!/!*.{jpg,png}',['copy-images']);
    gulp.watch(['app/css/!*.css','app/js/!*.js','app/js/!*.tmp.js'],['copy-other']);
});*/

gulp.task('default',['less'])