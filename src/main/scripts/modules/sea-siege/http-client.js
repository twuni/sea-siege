import _ from 'lodash';
import Cache from './cache';

class HTTPClient {

  constructor(options = {}) {
    this.cache = options.cache || new Cache();
  }

  execute(method, uri, options = {}) {

    const {cache} = this;
    const signature = `${method} ${uri}`;

    return new Promise(function(resolve, reject) {

      const response = cache.fetch(signature);

      if(response !== undefined) {
        resolve(response);
        return;
      }

      const request = new XMLHttpRequest();

      request.open(method, uri, true);

      request.timeout = options.timeout || 0;

      _.forOwn(options.headers || {}, function(value, name) {
        request.setRequestHeader(name, value);
      });

      request.addEventListener('load', function() {
        if(400 <= request.status) {
          reject({
            status: request.status,
            reason: request.statusText
          });
        } else {
          cache.save(signature, request.response);
          resolve(request.response);
        }
      });

      request.addEventListener('error', function() {
        reject({
          status: request.status,
          reason: request.statusText
        });
      });

      request.addEventListener('timeout', function() {
        reject({
          status: 504,
          reason: 'Response Timeout'
        });
      });

      request.addEventListener('abort', function() {
        reject({
          status: 408,
          reason: 'Request Aborted'
        });
      });

      request.send(options.data);

    });

  }

  delete(uri, options = {}) {
    return this.execute('delete', uri, options);
  }

  get(uri, options = {}) {
    return this.execute('get', uri, options);
  }

  head(uri, options = {}) {
    return this.execute('head', uri, options);
  }

  post(uri, options = {}) {
    return this.execute('post', uri, options);
  }

  put(uri, options = {}) {
    return this.execute('put', uri, options);
  }

}

export default HTTPClient;
