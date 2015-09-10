class HTTPClient {

  static execute(method, uri, options = {}) {

    return new Promise(function(resolve, reject) {

      let request = new XMLHttpRequest();

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

  static delete(uri, options = {}) {
    return this.execute('delete', uri, options);
  }

  static get(uri, options = {}) {
    return this.execute('get', uri, options);
  }

  static head(uri, options = {}) {
    return this.execute('head', uri, options);
  }

  static post(uri, options = {}) {
    return this.execute('post', uri, options);
  }

  static put(uri, options = {}) {
    return this.execute('put', uri, options);
  }

}

export default HTTPClient;
