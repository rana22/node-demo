var gulp = require('gulp');
var template = require('gulp-template');
var argv = require('yargs').argv;
var map = require('map-stream');

gulp.task('addServiceBinding', function() {
    let Iname = "I" + argv.name;
    let replaceImport = "/* INSERT IMPORTS */";
    let replaceBinding = "/* INSERT BINDING */";

    let insertServiceImport1 = "import " + argv.name + "Service = require(\"./" + argv.name + "Service\");\n" + replaceImport;
    let insertServiceImport2 = "import " + Iname + "Service = require(\"./" + Iname + "Service\");\n" + replaceImport;
    let insertServiceBinding = "bind<" + Iname + "Service>(TYPES." + Iname + "Service).to(" + argv.name + "Service).inSingletonScope();\n\t\t\t" + replaceBinding;

    return gulp.src(['src/service/ServiceModule.ts'])
        .pipe(map(function(file, cb) {
            let fileContents = file.contents.toString();
            fileContents = fileContents.replace(replaceImport, insertServiceImport1);
            fileContents = fileContents.replace(replaceImport, insertServiceImport2);
            fileContents = fileContents.replace(replaceBinding, insertServiceBinding);
            file.contents = new Buffer(fileContents);
            cb(null, file);
        }))
        .pipe(gulp.dest('src/service/'));
});