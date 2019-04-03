import e = require("express");
import {Controller, Get, Post, Delete} from "inversify-express-utils";
import {injectable, inject} from "inversify";
import TYPES from "../config/Types";
import {ITokenModel} from "../model/ITokenModel";
import IAuthController = require("./IAuthController");
import IAuthService = require("../service/IAuthService");
import { Kernel } from 'inversify';

export function AuthControllerFactory(kernel: Kernel) {

    @injectable()
    @Controller('/')
    class AuthController {

        private _service: IAuthService;

        constructor(@inject(TYPES.IAuthService) service: IAuthService) {
            this._service = service;
        }

        @Post('/login', kernel.get<e.RequestHandler>('Oauth'), kernel.get<e.RequestHandler>('OauthError'))
        public login(req: e.Request, res: e.Response): void {}

        @Post('/logout', kernel.get<e.RequestHandler>('Authenticate'))
        public logout(req: e.Request, res: e.Response): any {
            //console.log(req.user);
            req.user.getToken().then((token) => {
                token.destroy().then(() => {
                    res.send();
                });
            });
        }

        @Get('/session', kernel.get<e.RequestHandler>('Authenticate'))
        public session(req: e.Request, res: e.Response): any {
            //console.log(req.user);
            return req.user;
        }

    }

    return AuthController;
}