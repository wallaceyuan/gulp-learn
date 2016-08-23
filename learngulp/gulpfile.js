var gulp = require('gulp');
var Q = require('q')

gulp.task('default',['one','hello'], function () {
    console.log('default');
});

gulp.task('hello', function () {
    console.log('您好');
});
gulp.task('two',['one'],function(){
    console.log('two is done');
});

gulp.task('uglify',function(){
    //do something
});
gulp.task('reload',function(){
    //do something
});

/*gulp.task('one',function(cb){
    //one是一个异步执行的任务
    setTimeout(function(){
        console.log('one is done')
        cb()
    },5000);
});*/

/*gulp.task('one',function(cb){
    var stream = gulp.src('script/src.js')// 获取文件的流的api
        .pipe(dosomething()) //dosomething()中有某些异步操作
        .pipe(gulp.dest('build'));// 写文件的api
    return stream;
});*/

gulp.task('one',function(cb){
    var deferred = Q.defer()
    setTimeout(function(){
        console.log('asy');
        deferred.resolve()
    },5000)
    return deferred.promise
})

function dosomething(){

}

gulp.watch('js/**/*.js', ['uglify','reload']);