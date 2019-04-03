import DataAccess = require("./DataAccess");
import Sequelize = require("sequelize");
import {IRolePermissionMapModel, IRolePermissionMapInstance} from "../model/IRolePermissionMapModel";
import TokenSchema = require("./TokenSchema");
import RoleSchema = require("./RoleSchema");

var sequelize = DataAccess.sequelize;

class RolePermissionMapSchema {

    static get schema() {
        return {
            roleId: {
                type: Sequelize.INTEGER,
                primaryKey: true
            },
            permissionId: {
                type: Sequelize.INTEGER,
                primaryKey: true
            },
            createdAt: {
                type: Sequelize.DATE
            },
            updatedAt: {
                type: Sequelize.DATE
            }
        };
    }

    static get config() {
        return {
            instanceMethods: {
                toJSON: function () {
                    var values = Object.assign({}, this.get());
                    values.$type = "RolePermissionMap";
                    delete values.password;
                    return values;
                }
            }
        }
    }

}

var schema = sequelize.define<IRolePermissionMapInstance, IRolePermissionMapModel>("role_permissions", RolePermissionMapSchema.schema, RolePermissionMapSchema.config);

export = schema;
