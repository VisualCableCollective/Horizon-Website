export class ApiRequestUtil {
  static async fetch(url: string, method: string = 'GET', body?: string, headers?: Headers){

    const requestHeaders: Headers = new Headers();
        
    // Set default headers
    requestHeaders.set('Accept', 'application/json');
    requestHeaders.set('Content-Type', 'application/json');
    requestHeaders.set('Authorization', 'Bearer ');

    headers?.forEach((value, key) => {
      requestHeaders.append(key, value);
    });

    return fetch(url, {
      method: method, 
      headers: requestHeaders,
      body: body,
    });
  }
}