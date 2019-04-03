import e = require("express");
import {Controller, Get, Post, Put, Delete} from "inversify-express-utils";
import {injectable, inject} from "inversify";
import TYPES from "../config/Types";
import { Kernel } from 'inversify';
import IJobSiteController = require("./IJobSiteController");
import IJobSiteService = require("../service/IJobSiteService");
import {IJobSiteModel} from "../model/IJobSiteModel";

export function JobSiteControllerFactory(kernel: Kernel) {

    @injectable()
    @Controller('/jobsites')
    class JobSiteController implements IJobSiteController {

        private _service: IJobSiteService;

        constructor(@inject(TYPES.IJobSiteService) service: IJobSiteService) {
            this._service = service;
        }

        @Get('/')
        public retrieve(req: e.Request, res: e.Response): Promise<IJobSiteModel[]> {
            return this._service.retrieve();
        }

        @Post('/', kernel.get<e.RequestHandler>('Authenticate'), kernel.get<e.RequestHandler>('Permissions'))
        public create(req: e.Request, res: e.Response): Promise<IJobSiteModel> {
            return this._service.create(req.body);
        }

        @Get('/:id', kernel.get<e.RequestHandler>('Authenticate'), kernel.get<e.RequestHandler>('Permissions'))
        public findById(req: e.Request, res: e.Response): Promise<IJobSiteModel> {
            return this._service.findById(req.params.id);
        }

        @Put('/:id', kernel.get<e.RequestHandler>('Authenticate'), kernel.get<e.RequestHandler>('Permissions'))
        public update(req: e.Request, res: e.Response): Promise<any> {
            return this._service.update(req.params.id, req.body);
        }

    }

    return JobSiteController;
}