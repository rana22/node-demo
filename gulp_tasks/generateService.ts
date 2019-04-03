var gulp = require('gulp');
var template = require('gulp-template');
var rename = require('gulp-rename');
var argv = require('yargs').argv;

gulp.task('generateService', function() {
    let Iname = "I" + argv.name;

    return gulp.src(['gulp_templates/Service.tpl.ts'])
        .pipe(template({name: argv.name, Iname: Iname}))
        .pipe(rename(argv.name + "Service.ts"))
        .pipe(gulp.dest('src/service'));
});