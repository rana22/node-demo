import {Gulpclass, Task, SequenceTask} from 'gulpclass';
import * as runSequence from 'run-sequence';
import * as gulp from "gulp";
import {join} from "path";
import * as del from 'del';
import * as ts from 'gulp-typescript';
import * as size from 'gulp-size';

//Task Imports
require('./gulp_tasks/generateIModel.ts');
require('./gulp_tasks/generateModel.ts');
require('./gulp_tasks/generateSchema.ts');
require('./gulp_tasks/generateIDao.ts');
require('./gulp_tasks/generateDao.ts');
require('./gulp_tasks/generateIService.ts');
require('./gulp_tasks/generateService.ts');
require('./gulp_tasks/generateIController.ts');
require('./gulp_tasks/generateController.ts');
require('./gulp_tasks/addTag.ts');
require('./gulp_tasks/addTypes.ts');
require('./gulp_tasks/addServiceBinding.ts');
require('./gulp_tasks/addDaoBinding.ts');
require('./gulp_tasks/addControllerBinding.ts');

@Gulpclass()
export class GulpFile {

    public static readonly GULP_CONFIGURATION = {
        "BUILD_OUTPUT_ROOT":"./",
        "BUILD_OUTPUT_DIRECTORY": "build",
        "SOURCE_ROOT": "./",
        "SOURCE_DIRECTORY": "src"
    };
    private buildDir: string = GulpFile.GULP_CONFIGURATION.BUILD_OUTPUT_ROOT + GulpFile.GULP_CONFIGURATION.BUILD_OUTPUT_DIRECTORY;
    private sourceDir: string = GulpFile.GULP_CONFIGURATION.SOURCE_ROOT + GulpFile.GULP_CONFIGURATION.SOURCE_DIRECTORY;

    @Task()
    build(){
        let tsProject = ts.createProject('tsconfig.json');//use our settings in the tsconfig.json to transpile our project
        return gulp.src([this.sourceDir + "/**/**.ts"])
            .pipe(tsProject())//transpile stream
            .pipe(size())
            .pipe(gulp.dest(this.buildDir))//output stream
        ;

    }

    @Task("generate", ["generateIModel", "generateModel", "generateSchema", "generateIDao", "generateDao",
                       "generateIService", "generateService", "generateIController", "generateController",
                       "addTag", "addTypes", "addServiceBinding", "addDaoBinding", "addControllerBinding"])
    generateFiles(){
        console.log("Generation complete");
    }

    @Task()
    clean() {
        return del(this.buildDir);
    }

    @Task()
    watch(){
        gulp.watch(this.sourceDir + "/**/**.ts", ["build"]);
    }


    @Task("default", ["clean","build"])//specifies custom name for task
    defaultTask(){
        console.log("Build complete");
    }


}