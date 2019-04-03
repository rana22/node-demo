import <%= Iname %>Service = require("./<%= Iname %>Service");
import {<%= Iname %>Model} from "../model/<%= Iname %>Model";
import {injectable,inject} from "inversify";
import BaseService = require("./base/BaseService");
import <%= Iname %>Dao = require("../dao/<%= Iname %>Dao");
import TYPES from "../config/Types";
import md5 = require("md5");
import {<%= Iname %>Instance} from "../model/<%= Iname %>Model";
var request = require('request-promise');

@injectable()
class <%= name %>Service extends BaseService<<%= Iname %>Dao,<%= Iname %>Model> implements <%= Iname %>Service {

    constructor (@inject(TYPES.<%= Iname %>Dao) dao: <%= Iname %>Dao) {
        super(dao);
    }

}

export = <%= name %>Service;