import express = require("express");
import IReadController = require("./base/IReadController");
import ICreateController = require("./base/ICreateController");
import IUpdateController = require("./base/IUpdateController");
import IDeleteController = require("./base/IDeleteController");
import {ITestResultModel} from "../model/ITestResultModel";

interface ITestResultController extends ICreateController<ITestResultModel>, IReadController<ITestResultModel>, IUpdateController, IDeleteController {
    //put new methods here
}

export = ITestResultController;