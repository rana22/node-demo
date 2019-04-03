import IBaseService = require("./base/IBaseService");
import {<%= Iname %>Model} from "../model/<%= Iname %>Model";

interface <%= Iname %>Service extends IBaseService<<%= Iname %>Model> {

}

export = <%= Iname %>Service;