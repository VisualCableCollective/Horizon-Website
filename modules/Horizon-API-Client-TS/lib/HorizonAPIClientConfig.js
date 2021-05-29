"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Environment = void 0;
// Constants
const endpoints_1 = require("./constants/endpoints");
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
exports.default = HorizonAPIClientConfig;
var Environment;
(function (Environment) {
    /**
     * The API client is used in a production environment and will connect to the production services.
     */
    Environment[Environment["Production"] = 0] = "Production";
    /**
     * The API client is used in a local development environment and will only connect to the local server specified in the constructor or to the default 'https://localhost:8000/' server.
     */
    Environment[Environment["LocalDevelopment"] = 1] = "LocalDevelopment";
})(Environment = exports.Environment || (exports.Environment = {}));
