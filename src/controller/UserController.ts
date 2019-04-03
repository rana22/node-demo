import e = require("express");
import {Controller, Get, Post, Put, Delete} from "inversify-express-utils";
import {injectable, inject} from "inversify";
import TYPES from "../config/Types";
import {IUserModel} from "../model/IUserModel";
import IUserController = require("./IUserController");
import IUserService = require("../service/IUserService");
import { Kernel } from 'inversify';
import {IUserInstance} from "../model/IUserModel";
import Permission = require("../utils/Permission");

export function UserControllerFactory(kernel: Kernel) {

    @injectable()
    @Controller('/users')
    class UserController implements IUserController {

        private _service: IUserService;
        private _permission = new Permission();

        constructor(@inject(TYPES.IUserService) service: IUserService) {
            this._service = service;
        }

        @Post('/')
        public create(req: e.Request, res: e.Response): Promise<IUserModel> {
            let roles: Array<number> = req.body.roles;
            return this._service.createUser(req.body, roles);
        }

        @Get('/', kernel.get<e.RequestHandler>('Authenticate'), kernel.get<e.RequestHandler>('Permissions'))
        public retrieve(req: e.Request, res: e.Response): Promise<IUserModel[]> {
            return this._service.retrieve();
        }

        @Get('/:id', kernel.get<e.RequestHandler>('Authenticate'))
        public findById(req: e.Request, res: e.Response): Promise<IUserModel> {
            let userId = this._permission.checkUserPermission('/users','/:id','GET', req.user) ? req.params.id : req.user.id;
            return this._service.findById(userId);
        }

        @Put('/:id', kernel.get<e.RequestHandler>('Authenticate'))
        public update(req: e.Request, res: e.Response): Promise<any> {
            let userId = this._permission.checkUserPermission('/users','/:id','PUT', req.user) ? req.params.id : req.user.id;
            let roles: Array<number> = req.body.roles;
            let promises = [this._service.updateUser(userId, req.body, roles)];
            return Promise.all(promises);
        }

        @Post('/forgot-password')
        public forgotPassword(req: e.Request, res: e.Response): Promise<any> {
            return this._service.forgotPassword(req.body.email, req.body.url);
        }

        @Get('/reset-password/:resetPasswordToken')
        public findUserWithResetToken(req: e.Request, res: e.Response): Promise<any> {
            return this._service.findUserWithResetToken(req.params.resetPasswordToken);
        }

        @Put('/reset-password/:resetPasswordToken')
        public updateUserPassword(req: e.Request, res: e.Response): Promise<any> {
            return this._service.updateUserPassword(req.body.id, req.params.resetPasswordToken, req.body.password);
        }

    }

    return UserController;
}