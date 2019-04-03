var gulp = require('gulp');
var template = require('gulp-template');
var rename = require('gulp-rename');
var argv = require('yargs').argv;

gulp.task('generateIController', function() {
    let Iname = "I" + argv.name;

    return gulp.src(['gulp_templates/IController.tpl.ts'])
        .pipe(template({Iname: Iname}))
        .pipe(rename(Iname + "Controller.ts"))
        .pipe(gulp.dest('src/controller'));
});