import {Model} from "sequelize";
import {<%= Iname %>Model, <%= Iname %>Instance} from "./<%= Iname %>Model";

interface <%= name %>Model extends Model<<%= Iname %>Instance, <%= Iname %>Model> {

}

export = <%= name %>Model;