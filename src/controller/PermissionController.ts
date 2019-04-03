import e = require("express");
import {Controller, Get, Post, Put, Delete} from "inversify-express-utils";
import {injectable, inject} from "inversify";
import TYPES from "../config/Types";
import { Kernel } from 'inversify';
import IPermissionController = require("./IPermissionController");
import IPermissionService = require("../service/IPermissionService");
import {IPermissionModel} from "../model/IPermissionModel";

export function PermissionControllerFactory(kernel: Kernel) {

    @injectable()
    @Controller('/permissions')
    class PermissionController implements IPermissionController {

        private _service: IPermissionService;

        constructor(@inject(TYPES.IPermissionService) service: IPermissionService) {
            this._service = service;
        }

        @Post('/', kernel.get<e.RequestHandler>('Authenticate'), kernel.get<e.RequestHandler>('Permissions'))
        public create(req: e.Request, res: e.Response): Promise<IPermissionModel> {
            return this._service.create(req.body);
        }

        @Get('/', kernel.get<e.RequestHandler>('Authenticate'), kernel.get<e.RequestHandler>('Permissions'))
        public retrieve(req: e.Request, res: e.Response): Promise<IPermissionModel[]> {
            return this._service.retrieve();
        }

        @Get('/:id', kernel.get<e.RequestHandler>('Authenticate'), kernel.get<e.RequestHandler>('Permissions'))
        public findById(req: e.Request, res: e.Response): Promise<IPermissionModel> {
            return this._service.findById(req.params.id);
        }

        @Put('/:id', kernel.get<e.RequestHandler>('Authenticate'), kernel.get<e.RequestHandler>('Permissions'))
        public update(req: e.Request, res: e.Response): Promise<any> {
            return this._service.update(req.params.id, req.body);
        }

    }

    return PermissionController;
}