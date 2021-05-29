"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class HTTPRequestUtil {
    static async Request(route, clientConfig, data = null) {
        let actualFetch;
        // @ts-ignore
        if (window.fetch) {
            actualFetch = fetch;
        }
        else {
            // eslint-disable-next-line global-require
            actualFetch = require('node-fetch'); // Node Fetch
        }
        const headers = {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Connection: 'keep-alive',
        };
        if (clientConfig.BearerToken !== '') {
            headers.Authorization = `Bearer ${clientConfig.BearerToken}`;
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
            response = await actualFetch(clientConfig.ServerUrl + route.route, options);
            return response;
        }
        catch (ex) {
            console.error(ex);
            return null;
        }
    }
}
exports.default = HTTPRequestUtil;
