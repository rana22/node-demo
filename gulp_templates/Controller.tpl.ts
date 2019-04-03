import e = require("express");
import {Controller, Get, Post, Put, Delete} from "inversify-express-utils";
import {injectable, inject} from "inversify";
import TYPES from "../config/Types";
import { Kernel } from 'inversify';
import <%= Iname %>Controller = require("./<%= Iname %>Controller");
import <%= Iname %>Service = require("../service/<%= Iname %>Service");
import {<%= Iname %>Model} from "../model/<%= Iname %>Model";

export function <%= name %>ControllerFactory(kernel: Kernel) {

    @injectable()
    @Controller('/<%= name %>s')
    class <%= name %>Controller implements <%= Iname %>Controller {

        private _service: <%= Iname %>Service;

        constructor(@inject(TYPES.<%= Iname %>Service) service: <%= Iname %>Service) {
            this._service = service;
        }

        @Get('/')
        public retrieve(req: e.Request, res: e.Response): Promise<<%= Iname %>Model[]> {
            return this._service.retrieve();
        }

        @Post('/', kernel.get<e.RequestHandler>('Authenticate'), kernel.get<e.RequestHandler>('Permissions'))
        public create(req: e.Request, res: e.Response): Promise<<%= Iname %>Model> {
            return this._service.create(req.body);
        }

        @Get('/:id', kernel.get<e.RequestHandler>('Authenticate'), kernel.get<e.RequestHandler>('Permissions'))
        public findById(req: e.Request, res: e.Response): Promise<<%= Iname %>Model> {
            return this._service.findById(req.params.id);
        }

        @Put('/:id', kernel.get<e.RequestHandler>('Authenticate'), kernel.get<e.RequestHandler>('Permissions'))
        public update(req: e.Request, res: e.Response): Promise<any> {
            return this._service.update(req.params.id, req.body);
        }

        @Delete('/:id', kernel.get<e.RequestHandler>('Authenticate'), kernel.get<e.RequestHandler>('Permissions'))
        public delete(req: e.Request, res: e.Response): Promise<any> {
            return this._service.delete(req.params.id);
        }

    }

    return <%= name %>Controller;
}