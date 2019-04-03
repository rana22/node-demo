var gulp = require('gulp');
var template = require('gulp-template');
var rename = require('gulp-rename');
var argv = require('yargs').argv;

gulp.task('generateSchema', function() {
    let Iname = "I" + argv.name;
    let lowercaseName = argv.name.toLowerCase();

    return gulp.src(['gulp_templates/Schema.tpl.ts'])
        .pipe(template({name: argv.name, Iname: Iname, tableName: lowercaseName}))
        .pipe(rename(argv.name + "Schema.ts"))
        .pipe(gulp.dest('src/schema'));
});