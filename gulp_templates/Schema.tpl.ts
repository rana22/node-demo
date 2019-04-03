import DataAccess = require("./DataAccess");
import Sequelize = require("sequelize");
import {<%= Iname %>Model, <%= Iname %>Instance} from "../model/<%= Iname %>Model";

var sequelize = DataAccess.sequelize;

class <%= name %>Schema {

    static get schema() {
        return {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            }

        };
    }

    static get config() {
        return {
            instanceMethods: {
                toJSON: function () {
                    var values = Object.assign({}, this.get());
                    values.$type = "<%= name %>";
                    return values;
                }
            },
            timestamps: false
        }
    }

}

var schema = sequelize.define<<%= Iname %>Instance, <%= Iname %>Model>("<%= tableName %>", <%= name %>Schema.schema, <%= name %>Schema.config);

export = schema;
