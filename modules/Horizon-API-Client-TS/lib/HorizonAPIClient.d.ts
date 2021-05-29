import APIRoute from './models/APIRoute';
declare namespace HorizonAPI {
    class HTTPRequestUtil {
        static Request(route: APIRoute, data?: any): Promise<Response | null>;
    }
    class HorizonAPIClientConfig {
        /**
         * The current Bearer token used for authentication.
         */
        BearerToken: string;
        /**
         * The current environment for the API client. Can only be set in the constructor.
         */
        readonly Environment: Environment;
        /**
         * The current server used by the API client. Will only be set when initalizing the config.
         */
        readonly ServerUrl: String;
        constructor(env?: Environment, customLocalServerUrl?: String);
    }
    class HorizonAPIClient {
        /**
         * The config used by the API client.
         */
        static Config: HorizonAPIClientConfig;
        /**
         * Authenticates a user with the given token.
         * @param token Bearer token to authenticate a user
         * @returns true if the user has been authenticated successfully
         */
        static authenticateUserWithToken(token: string): Promise<boolean>;
        /**
         * Tries to find a team for the given ID.
         * @param id the ID of the team
         * @returns a Team model
         */
        static getTeam(id: number | string): Promise<Team | null>;
    }
    enum Environment {
        /**
         * The API client is used in a production environment and will connect to the production
         * services.
         */
        Production = 0,
        /**
         * The API client is used in a local development environment and will only connect to the local server specified in the constructor or to the default 'https://localhost:8000/' server.
         */
        LocalDevelopment = 1
    }
    class Team {
        id: number;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        constructor(apiTeamResponse: any);
        getProducts(): Promise<Product[] | null>;
    }
    class Product {
        id: number;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        ownerID: number;
        ownerType: string;
        constructor(apiProductResponse: any);
    }
}
export = HorizonAPI;
