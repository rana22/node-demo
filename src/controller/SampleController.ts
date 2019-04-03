import e = require("express");
import {Controller, Get, Post, Put, Delete} from "inversify-express-utils";
import {injectable, inject} from "inversify";
import TYPES from "../config/Types";
import { Kernel } from 'inversify';
import ISampleController = require("./ISampleController");
import ISampleService = require("../service/ISampleService");
import {ISampleModel} from "../model/ISampleModel";

export function SampleControllerFactory(kernel: Kernel) {

    @injectable()
    @Controller('/samples')
    class SampleController implements ISampleController {

        private _service: ISampleService;

        constructor(@inject(TYPES.ISampleService) service: ISampleService) {
            this._service = service;
        }

        @Get('/')
        public retrieve(req: e.Request, res: e.Response): Promise<ISampleModel[]> {
            return this._service.retrieve();
        }

        @Post('/', kernel.get<e.RequestHandler>('Authenticate'), kernel.get<e.RequestHandler>('Permissions'))
        public create(req: e.Request, res: e.Response): Promise<ISampleModel> {
            return this._service.create(req.body);
        }

        @Get('/:id', kernel.get<e.RequestHandler>('Authenticate'), kernel.get<e.RequestHandler>('Permissions'))
        public findById(req: e.Request, res: e.Response): Promise<ISampleModel> {
            return this._service.findById(req.params.id);
        }

        @Put('/:id', kernel.get<e.RequestHandler>('Authenticate'), kernel.get<e.RequestHandler>('Permissions'))
        public update(req: e.Request, res: e.Response): Promise<any> {
            return this._service.update(req.params.id, req.body);
        }

    }

    return SampleController;
}