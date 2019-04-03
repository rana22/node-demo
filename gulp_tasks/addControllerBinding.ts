var gulp = require('gulp');
var template = require('gulp-template');
var argv = require('yargs').argv;
var map = require('map-stream');

gulp.task('addControllerBinding', function() {
    let Iname = "I" + argv.name;
    let factoryName = argv.name + "ControllerFactory";
    let replaceImport = "/* INSERT IMPORTS */";
    let replaceBinding = "/* INSERT BINDING */";

    let insertControllerImport1 = "import {" + factoryName + "} from \"./" + argv.name + "Controller\";\n" + replaceImport;
    let insertControllerImport2 = "import " + Iname + "Controller = require(\"./" + Iname + "Controller\");\n" + replaceImport;

    let insertControllerBinding1 = "let " + argv.name + "Controller = " + factoryName + "(kernel);\n\t\t\t" + replaceBinding;
    let insertControllerBinding2 = "bind<" + Iname + "Controller>(TYPE.Controller).to(" + argv.name + "Controller).inSingletonScope().whenTargetNamed(TAGS." + argv.name + "Controller);\n\t\t\t" + replaceBinding;

    return gulp.src(['src/controller/ControllerModule.ts'])
        .pipe(map(function(file, cb) {
            let fileContents = file.contents.toString();
            fileContents = fileContents.replace(replaceImport, insertControllerImport1);
            fileContents = fileContents.replace(replaceImport, insertControllerImport2);
            fileContents = fileContents.replace(replaceBinding, insertControllerBinding1);
            fileContents = fileContents.replace(replaceBinding, insertControllerBinding2);
            file.contents = new Buffer(fileContents);
            cb(null, file);
        }))
        .pipe(gulp.dest('src/controller/'));
});