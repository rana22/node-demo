import e = require("express");
import {Controller, Get, Post, Put} from "inversify-express-utils";
import {injectable, inject} from "inversify";
import TYPES from "../config/Types";
import { Kernel } from 'inversify';
import IRoleController = require("./IRoleController");
import IRoleService = require("../service/IRoleService");
import {IRoleModel} from "../model/IRoleModel";

export function RoleControllerFactory(kernel: Kernel) {

    @injectable()
    @Controller('/roles')
    class RoleController implements IRoleController {

        private _service: IRoleService;

        constructor(@inject(TYPES.IRoleService) service: IRoleService) {
            this._service = service;
        }

        @Post('/', kernel.get<e.RequestHandler>('Authenticate'), kernel.get<e.RequestHandler>('Permissions'))
        public create(req: e.Request, res: e.Response): Promise<IRoleModel> {
            let permissions: Array<number> = req.body.permissions;
            return this._service.createRole(req.body, permissions);
        }

        @Get('/', kernel.get<e.RequestHandler>('Authenticate'), kernel.get<e.RequestHandler>('Permissions'))
        public retrieve(req: e.Request, res: e.Response): Promise<IRoleModel[]> {
            return this._service.retrieve();
        }

        @Get('/:id', kernel.get<e.RequestHandler>('Authenticate'), kernel.get<e.RequestHandler>('Permissions'))
        public findById(req: e.Request, res: e.Response): Promise<IRoleModel> {
            return this._service.findById(req.params.id);
        }

        @Put('/:id', kernel.get<e.RequestHandler>('Authenticate'), kernel.get<e.RequestHandler>('Permissions'))
        public update(req: e.Request, res: e.Response): Promise<any> {
            let permissions: Array<number> = req.body.permissions;
            let promises = [this._service.updateRole(req.params.id, req.body, permissions)];
            return Promise.all(promises);
        }

    }

    return RoleController;
}