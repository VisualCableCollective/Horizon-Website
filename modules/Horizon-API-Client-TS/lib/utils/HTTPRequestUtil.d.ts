import { HorizonAPIClientConfig } from '../HorizonAPIClient';
import APIRoute from '../models/APIRoute';
export default class HTTPRequestUtil {
    static Request(route: APIRoute, clientConfig: HorizonAPIClientConfig, data?: any): Promise<Response | null>;
}
