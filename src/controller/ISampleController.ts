import express = require("express");
import IReadController = require("./base/IReadController");
import ICreateController = require("./base/ICreateController");
import IUpdateController = require("./base/IUpdateController");
import IDeleteController = require("./base/IDeleteController");
import {ISampleModel} from "../model/ISampleModel";

interface ISampleController extends ICreateController<ISampleModel>, IReadController<ISampleModel>, IUpdateController {
    //put new methods here
}

export = ISampleController;