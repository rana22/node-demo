import {KernelModule, interfaces} from "inversify";
import Bind = interfaces.Bind;
import {TYPE} from "inversify-express-utils";
import TAGS from "../config/Tags";
import { Kernel } from 'inversify';
import {UserControllerFactory} from "./UserController";
import IUserController = require("./IUserController");
import {AuthControllerFactory} from "./AuthController";
import IAuthController = require("./IAuthController");
import {FileControllerFactory} from "./FileController";
import IFileController = require("./IFileController");
import {RoleControllerFactory} from "./RoleController";
import IRoleController = require("./IRoleController");
import {PermissionControllerFactory} from "./PermissionController";
import IPermissionController = require("./IPermissionController");
import {TestResultControllerFactory} from "./TestResultController";
import ITestResultController = require("./ITestResultController");
/* INSERT IMPORTS */
import {JobSiteControllerFactory} from "./JobSiteController";
import IJobSiteController = require("./IJobSiteController");
import {SampleControllerFactory} from "./SampleController";
import ISampleController = require("./ISampleController");

class ControllerModule {

    static config (kernel: Kernel) {
        return new KernelModule((bind: Bind) => {
            let UserController = UserControllerFactory(kernel);
            bind<IUserController>(TYPE.Controller).to(UserController).inSingletonScope().whenTargetNamed(TAGS.UserController);
            let AuthController = AuthControllerFactory(kernel);
            bind<IAuthController>(TYPE.Controller).to(AuthController).inSingletonScope().whenTargetNamed(TAGS.AuthController);
            let FileController = FileControllerFactory(kernel);
            bind<IFileController>(TYPE.Controller).to(FileController).inSingletonScope().whenTargetNamed(TAGS.FileController);
            let RoleController = RoleControllerFactory(kernel);
            bind<IRoleController>(TYPE.Controller).to(RoleController).inSingletonScope().whenTargetNamed(TAGS.RoleController);
            let PermissionController = PermissionControllerFactory(kernel);
            bind<IPermissionController>(TYPE.Controller).to(PermissionController).inSingletonScope().whenTargetNamed(TAGS.PermissionController);
			let TestResultController = TestResultControllerFactory(kernel);
			bind<ITestResultController>(TYPE.Controller).to(TestResultController).inSingletonScope().whenTargetNamed(TAGS.TestResultController);
			/* INSERT BINDING */
            let JobSiteController = JobSiteControllerFactory(kernel);
            bind<IJobSiteController>(TYPE.Controller).to(JobSiteController).inSingletonScope().whenTargetNamed(TAGS.JobSiteController);
            let SampleController = SampleControllerFactory(kernel);
            bind<ISampleController>(TYPE.Controller).to(SampleController).inSingletonScope().whenTargetNamed(TAGS.SampleController);
        });
    }

}

export = ControllerModule;