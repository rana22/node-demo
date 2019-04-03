import IBaseDao = require("./base/IBaseDao");
import {<%= Iname %>Instance, <%= Iname %>Model} from "../model/<%= Iname %>Model";

interface <%= Iname %>Dao extends IBaseDao<<%= Iname %>Model> {

}

export = <%= Iname %>Dao;