import express = require("express");
import IReadController = require("./base/IReadController");
import ICreateController = require("./base/ICreateController");
import IUpdateController = require("./base/IUpdateController");
import IDeleteController = require("./base/IDeleteController");
import {IRoleModel} from "../model/IRoleModel";

interface IRoleController extends ICreateController<IRoleModel>, IReadController<IRoleModel> {

}

export = IRoleController;