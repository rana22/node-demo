var gulp = require('gulp');
var template = require('gulp-template');
var rename = require('gulp-rename');
var argv = require('yargs').argv;

gulp.task('generateIDao', function() {
    let Iname = "I" + argv.name;

    return gulp.src(['gulp_templates/IDao.tpl.ts'])
        .pipe(template({Iname: Iname}))
        .pipe(rename(Iname + "Dao.ts"))
        .pipe(gulp.dest('src/dao'));
});