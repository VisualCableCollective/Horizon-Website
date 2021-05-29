export default class HorizonAPIClientConfig {
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
export declare enum Environment {
    /**
     * The API client is used in a production environment and will connect to the production services.
     */
    Production = 0,
    /**
     * The API client is used in a local development environment and will only connect to the local server specified in the constructor or to the default 'https://localhost:8000/' server.
     */
    LocalDevelopment = 1
}
