var gulp = require('gulp');
var template = require('gulp-template');
var argv = require('yargs').argv;
var map = require('map-stream');

gulp.task('addDaoBinding', function() {
    let Iname = "I" + argv.name;
    let replaceImport = "/* INSERT IMPORTS */";
    let replaceBinding = "/* INSERT BINDING */";

    let insertDaoImport1 = "import " + argv.name + "Dao = require(\"./" + argv.name + "Dao\");\n" + replaceImport;
    let insertDaoImport2 = "import " + Iname + "Dao = require(\"./" + Iname + "Dao\");\n" + replaceImport;
    let insertDaoBinding = "bind<" + Iname + "Dao>(TYPES." + Iname + "Dao).to(" + argv.name + "Dao).inSingletonScope();\n\t\t\t" + replaceBinding;

    return gulp.src(['src/dao/DataAccessModule.ts'])
        .pipe(map(function(file, cb) {
            let fileContents = file.contents.toString();
            fileContents = fileContents.replace(replaceImport, insertDaoImport1);
            fileContents = fileContents.replace(replaceImport, insertDaoImport2);
            fileContents = fileContents.replace(replaceBinding, insertDaoBinding);
            file.contents = new Buffer(fileContents);
            cb(null, file);
        }))
        .pipe(gulp.dest('src/dao/'));
});