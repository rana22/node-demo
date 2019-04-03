var gulp = require('gulp');
var template = require('gulp-template');
var rename = require('gulp-rename');
var argv = require('yargs').argv;

gulp.task('generateDao', function() {
    let Iname = "I" + argv.name;

    return gulp.src(['gulp_templates/Dao.tpl.ts'])
        .pipe(template({name: argv.name, Iname: Iname}))
        .pipe(rename(argv.name + "Dao.ts"))
        .pipe(gulp.dest('src/dao'));
});