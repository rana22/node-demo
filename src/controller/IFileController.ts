import express = require("express");
import IReadController = require("./base/IReadController");

interface IFileController {
    upload(req: express.Request, res: express.Response): Object;
}

export = IFileController;