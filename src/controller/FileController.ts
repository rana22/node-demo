import e = require("express");
import {Controller, Get, Post, Put, Delete} from "inversify-express-utils";
import {injectable, inject} from "inversify";
import TYPES from "../config/Types";
import IFileController = require("./IFileController");
import IFileService = require("../service/IFileService");
import { Kernel } from 'inversify';

export function FileControllerFactory(kernel: Kernel) {

    @injectable()
    @Controller('/upload', kernel.get<e.RequestHandler>('Authenticate'))
    class FileController implements IFileController {

        private _service: IFileService;

        constructor(@inject(TYPES.IFileService) service: IFileService) {
            this._service = service;
        }

        @Post('/', kernel.get<e.RequestHandler>('MulterMiddleware'))
        public upload(req: e.Request, res: e.Response): Object {
            return {
                filepath: req['file']['location'],
                relativePath: req['file']['key']
            };
        }

    }

    return FileController;
}