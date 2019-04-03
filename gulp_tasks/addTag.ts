var gulp = require('gulp');
var template = require('gulp-template');
var argv = require('yargs').argv;
var map = require('map-stream');

gulp.task('addTag', function() {
    let replaceTag = "/* INSERT TAG */";
    let insertTag = argv.name + "Controller: \'" + argv.name + "Controller\',\n\t" + replaceTag;

    return gulp.src(['src/config/Tags.ts'])
        .pipe(map(function(file, cb) {
            let fileContents = file.contents.toString();
            fileContents = fileContents.replace(replaceTag, insertTag);
            file.contents = new Buffer(fileContents);
            cb(null, file);
        }))
        .pipe(gulp.dest('src/config/'));
});