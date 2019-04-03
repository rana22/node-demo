import BaseDao = require("./base/BaseDao");
import {<%= Iname %>Instance,<%= Iname %>Model} from "../model/<%= Iname %>Model";
import <%= name %>Schema = require("../schema/<%= name %>Schema");
import {injectable} from "inversify";
import <%= Iname %>Dao = require("./<%= Iname %>Dao");

@injectable()
class <%= name %>Dao extends BaseDao<<%= Iname %>Model> implements <%= Iname %>Dao {
    constructor() {
        super(<%= name %>Schema);
    }

    retrieve(): Promise<<%= Iname %>Model[]> {
        return this._model.findAll({
            include : hierarchyDependencies
        });
    }

    findById (_id: number): Promise<<%= Iname %>Model> {
        return this._model.findOne({
            where: {
                id: _id
            },
            include: hierarchyDependencies
        });
    }
}

let hierarchyDependencies: Object[] = [];

Object.seal(<%= name %>Dao);
export = <%= name %>Dao;