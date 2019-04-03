var gulp = require('gulp');
var template = require('gulp-template');
var argv = require('yargs').argv;
var map = require('map-stream');

gulp.task('addTypes', function() {
    let Iname = "I" + argv.name;
    let replaceService = "/* INSERT SERVICE */";
    let replaceDao = "/* INSERT DAO */";

    let insertService = Iname + "Service: Symbol(\'" + Iname + "Service\'),\n\t" + replaceService;
    let insertDao = Iname + "Dao: Symbol(\'" + Iname + "Dao\'),\n\t" + replaceDao;

    return gulp.src(['src/config/Types.ts'])
        .pipe(map(function(file, cb) {
            let fileContents = file.contents.toString();
            fileContents = fileContents.replace(replaceService, insertService);
            fileContents = fileContents.replace(replaceDao, insertDao);
            file.contents = new Buffer(fileContents);
            cb(null, file);
        }))
        .pipe(gulp.dest('src/config/'));
});