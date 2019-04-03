import express = require("express");
import IReadController = require("./base/IReadController");
import ICreateController = require("./base/ICreateController");
import IUpdateController = require("./base/IUpdateController");
import IDeleteController = require("./base/IDeleteController");
import {IPermissionModel} from "../model/IPermissionModel";

interface IPermissionController extends ICreateController<IPermissionModel>, IReadController<IPermissionModel>, IUpdateController {
    //put new methods here
}

export = IPermissionController;