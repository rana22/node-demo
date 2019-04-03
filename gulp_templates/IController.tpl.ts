import express = require("express");
import IReadController = require("./base/IReadController");
import ICreateController = require("./base/ICreateController");
import IUpdateController = require("./base/IUpdateController");
import IDeleteController = require("./base/IDeleteController");
import {<%= Iname %>Model} from "../model/<%= Iname %>Model";

interface <%= Iname %>Controller extends ICreateController<<%= Iname %>Model>, IReadController<<%= Iname %>Model>, IUpdateController, IDeleteController {
    //put new methods here
}

export = <%= Iname %>Controller;