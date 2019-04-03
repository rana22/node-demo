var gulp = require('gulp');
var template = require('gulp-template');
var rename = require('gulp-rename');
var argv = require('yargs').argv;

gulp.task('generateIModel', function() {
    let Iname = "I" + argv.name;

    return gulp.src(['gulp_templates/IModel.tpl.ts'])
        .pipe(template({Iname: Iname}))
        .pipe(rename(Iname + "Model.ts"))
        .pipe(gulp.dest('src/model'));
});