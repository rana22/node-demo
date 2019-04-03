import e = require("express");
import {Controller, Get, Post, Put, Delete} from "inversify-express-utils";
import {injectable, inject} from "inversify";
import TYPES from "../config/Types";
import { Kernel } from 'inversify';
import ITestResultController = require("./ITestResultController");
import ITestResultService = require("../service/ITestResultService");
import {ITestResultModel} from "../model/ITestResultModel";

export function TestResultControllerFactory(kernel: Kernel) {

    @injectable()
    @Controller('/TestResults')
    class TestResultController implements ITestResultController {

        private _service: ITestResultService;

        constructor(@inject(TYPES.ITestResultService) service: ITestResultService) {
            this._service = service;
        }

        @Get('/')
        public retrieve(req: e.Request, res: e.Response): Promise<ITestResultModel[]> {
            return this._service.retrieve();
        }

        @Get('/:id')
        public retriveById(req: e.Request, res: e.Response): Promise<ITestResultModel> {
            return this._service.findById(req.params.id);
        }

        @Post('/', kernel.get<e.RequestHandler>('Authenticate'), kernel.get<e.RequestHandler>('Permissions'))
        public create(req: e.Request, res: e.Response): Promise<ITestResultModel> {
            return this._service.create(req.body);
        }

        @Get('/:id', kernel.get<e.RequestHandler>('Authenticate'), kernel.get<e.RequestHandler>('Permissions'))
        public findById(req: e.Request, res: e.Response): Promise<ITestResultModel> {
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

    return TestResultController;
}