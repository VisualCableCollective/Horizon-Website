// Models
import APIRoute, { RequestMethod } from '../models/APIRoute';

export const ROUTE_ID_REPLACE_PLACEHOLDER: string = '{id}';

// AUTH
export const USER_CREDENTIALS_LOGIN_ROUTE: APIRoute = {
  route: 'oauth/token', method: RequestMethod.POST, requiresAuth: false, requiresID: false, requiresParentRoute: false,
};

export const GET_SELF_USER_DATA_ROUTE: APIRoute = {
  route: 'user/me', method: RequestMethod.GET, requiresAuth: true, requiresID: false, requiresParentRoute: false,
};

export const GET_TEAM_ROUTE: APIRoute = {
  route: 'store/teams/{id}/', method: RequestMethod.GET, requiresAuth: false, requiresID: true, requiresParentRoute: false,
};

export const GET_PRODUCTS_OF_TEAM_ROUTE: APIRoute = {
  route: 'products', method: RequestMethod.GET, requiresAuth: false, requiresID: false, requiresParentRoute: true,
};
