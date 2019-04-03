var gulp = require('gulp');
var template = require('gulp-template');
var rename = require('gulp-rename');
var argv = require('yargs').argv;

gulp.task('generateController', function() {
    let Iname = "I" + argv.name;

    return gulp.src(['gulp_templates/Controller.tpl.ts'])
        .pipe(template({name: argv.name, Iname: Iname}))
        .pipe(rename(argv.name + "Controller.ts"))
        .pipe(gulp.dest('src/controller'));
});