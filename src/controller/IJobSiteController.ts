import express = require("express");
import IReadController = require("./base/IReadController");
import ICreateController = require("./base/ICreateController");
import IUpdateController = require("./base/IUpdateController");
import IDeleteController = require("./base/IDeleteController");
import {IJobSiteModel} from "../model/IJobSiteModel";

interface IJobSiteController extends ICreateController<IJobSiteModel>, IReadController<IJobSiteModel>, IUpdateController {
    //put new methods here
}

export = IJobSiteController;