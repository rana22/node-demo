var gulp = require('gulp');
var template = require('gulp-template');
var rename = require('gulp-rename');
var argv = require('yargs').argv;

gulp.task('generateIService', function() {
    let Iname = "I" + argv.name;

    return gulp.src(['gulp_templates/IService.tpl.ts'])
        .pipe(template({Iname: Iname}))
        .pipe(rename(Iname + "Service.ts"))
        .pipe(gulp.dest('src/service'));
});