import * as Sequelize from "sequelize";
import {Instance} from "sequelize";

export interface <%= Iname %>Model {
    id?: number;

}

export interface <%= Iname %>Instance extends Instance<<%= Iname %>Model>, <%= Iname %>Model {

}