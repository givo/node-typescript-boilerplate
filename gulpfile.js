var gulp = require('gulp');
var ts = require("gulp-typescript");
var sourcemaps = require('gulp-sourcemaps');

var tsProject = ts.createProject("tsconfig.json");

var paths = {
    scripts: [ "src/**/*.ts" ],
    dist: "dist"
}

gulp.task("default", ["scripts", "watch"], () => {
    console.log('gulp out');
});

gulp.task('scripts', function(){    
    const tsResult = tsProject.src()
    .pipe(sourcemaps.init())
    .pipe(tsProject());

  return tsResult.js
    .pipe(sourcemaps.write('.')) // <---
    .pipe(gulp.dest(tsProject.config.compilerOptions.outDir));
});

gulp.task('watch', function(){
    gulp.watch(paths.scripts, ['scripts']);
});