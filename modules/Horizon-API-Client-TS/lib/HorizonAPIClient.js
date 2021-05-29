"use strict";
// Constants
// eslint-disable-next-line max-classes-per-file
const routes_1 = require("./constants/routes");
const endpoints_1 = require("./constants/endpoints");
// Constants
const routes_2 = require("./constants/routes");
var HorizonAPI;
(function (HorizonAPI) {
    class HTTPRequestUtil {
        static async Request(route, data = null) {
            const routeCopy = route;
            // checks
            if (route.requiresID) {
                if (!route.ID) {
                    console.error('Horizon API: canceled request because ID was missing');
                    return null;
                }
                // inject ID into the route
                routeCopy.route = route.route.replace(routes_2.ROUTE_ID_REPLACE_PLACEHOLDER, route.ID.toString());
            }
            if (route.requiresParentRoute) {
                if (route.parentRoute === undefined) {
                    console.error('Horizon API: canceled request because parent route was missing');
                    return null;
                }
                routeCopy.route = route.parentRoute.route + route.route;
            }
            let actualFetch;
            // @ts-ignore
            if (window.fetch) {
                actualFetch = fetch;
            }
            else {
                // eslint-disable-next-line global-require, import/no-extraneous-dependencies
                actualFetch = require('node-fetch'); // Node Fetch
            }
            const headers = {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Connection: 'keep-alive',
            };
            if (HorizonAPIClient.Config.BearerToken !== '') {
                headers.Authorization = `Bearer ${HorizonAPIClient.Config.BearerToken}`;
            }
            const options = {
                method: 'GET',
                headers,
            };
            if (data !== null) {
                options.body = JSON.stringify(data);
            }
            let response;
            try {
                response = await actualFetch(HorizonAPIClient.Config.ServerUrl + routeCopy.route, options);
                return response;
            }
            catch (ex) {
                console.error(ex);
                return null;
            }
        }
    }
    HorizonAPI.HTTPRequestUtil = HTTPRequestUtil;
    class HorizonAPIClientConfig {
        constructor(env = Environment.Production, customLocalServerUrl = '') {
            // Authentication
            /**
             * The current Bearer token used for authentication.
             */
            this.BearerToken = '';
            this.Environment = env;
            // Set ServerUrl
            switch (env) {
                case Environment.LocalDevelopment:
                    if (customLocalServerUrl) {
                        this.ServerUrl = customLocalServerUrl;
                    }
                    else {
                        this.ServerUrl = 'http://localhost:8000/api/';
                    }
                    break;
                default:
                    this.ServerUrl = endpoints_1.PRODUCTION_SERVER_URL;
                    break;
            }
        }
    }
    HorizonAPI.HorizonAPIClientConfig = HorizonAPIClientConfig;
    class HorizonAPIClient {
        /**
         * Authenticates a user with the given token.
         * @param token Bearer token to authenticate a user
         * @returns true if the user has been authenticated successfully
         */
        static async authenticateUserWithToken(token) {
            HorizonAPIClient.Config.BearerToken = token;
            const response = await HTTPRequestUtil.Request(routes_1.GET_SELF_USER_DATA_ROUTE);
            if (response === null) {
                return false;
            }
            if (!response.ok) {
                return false;
            }
            return true;
        }
        /**
         * Tries to find a team for the given ID.
         * @param id the ID of the team
         * @returns a Team model
         */
        static async getTeam(id) {
            const getTeamRouteCopy = routes_1.GET_TEAM_ROUTE;
            getTeamRouteCopy.ID = id;
            const response = await HTTPRequestUtil.Request(getTeamRouteCopy);
            if (response === null) {
                return null;
            }
            if (!response.ok) {
                return null;
            }
            return new HorizonAPI.Team(await response.json());
        }
    }
    HorizonAPI.HorizonAPIClient = HorizonAPIClient;
    let Environment;
    (function (Environment) {
        /**
         * The API client is used in a production environment and will connect to the production
         * services.
         */
        Environment[Environment["Production"] = 0] = "Production";
        /**
         * The API client is used in a local development environment and will only connect to the local server specified in the constructor or to the default 'https://localhost:8000/' server.
         */
        Environment[Environment["LocalDevelopment"] = 1] = "LocalDevelopment";
    })(Environment = HorizonAPI.Environment || (HorizonAPI.Environment = {}));
    class Team {
        constructor(apiTeamResponse) {
            this.id = apiTeamResponse.id;
            this.name = apiTeamResponse.name;
            this.createdAt = new Date(apiTeamResponse.created_at);
            this.updatedAt = new Date(apiTeamResponse.updated_at);
        }
        async getProducts() {
            const parentRoute = routes_1.GET_TEAM_ROUTE;
            parentRoute.ID = this.id;
            const routeCopy = routes_2.GET_PRODUCTS_OF_TEAM_ROUTE;
            routeCopy.parentRoute = parentRoute;
            const response = await HTTPRequestUtil.Request(routeCopy);
            if (response === null) {
                return null;
            }
            if (!response.ok) {
                return null;
            }
            const productsJSON = await response.json();
            const productsArray = [];
            await productsJSON.forEach((element) => {
                productsArray.push(new Product(element));
            });
            return productsArray;
        }
    }
    HorizonAPI.Team = Team;
    class Product {
        constructor(apiProductResponse) {
            this.id = apiProductResponse.id;
            this.name = apiProductResponse.name;
            this.createdAt = new Date(apiProductResponse.created_at);
            this.updatedAt = new Date(apiProductResponse.updated_at);
            this.ownerID = apiProductResponse.ownable_id;
            this.ownerType = apiProductResponse.ownable_type;
        }
    }
    HorizonAPI.Product = Product;
})(HorizonAPI || (HorizonAPI = {}));
module.exports = HorizonAPI;
