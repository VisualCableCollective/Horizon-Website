"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET_PRODUCTS_OF_TEAM_ROUTE = exports.GET_TEAM_ROUTE = exports.GET_SELF_USER_DATA_ROUTE = exports.ROUTE_ID_REPLACE_PLACEHOLDER = void 0;
// Models
const APIRoute_1 = require("../models/APIRoute");
exports.ROUTE_ID_REPLACE_PLACEHOLDER = '{id}';
exports.GET_SELF_USER_DATA_ROUTE = {
    route: 'user/me', method: APIRoute_1.RequestMethod.GET, requiresAuth: true, requiresID: false, requiresParentRoute: false,
};
exports.GET_TEAM_ROUTE = {
    route: 'store/teams/{id}/', method: APIRoute_1.RequestMethod.GET, requiresAuth: false, requiresID: true, requiresParentRoute: false,
};
exports.GET_PRODUCTS_OF_TEAM_ROUTE = {
    route: 'products', method: APIRoute_1.RequestMethod.GET, requiresAuth: false, requiresID: false, requiresParentRoute: true,
};
