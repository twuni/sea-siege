import _ from 'lodash';

import HTTPClient from './http-client';

class Model {

  static get attributes() {
    return ['id'];
  }

  static get typeKey() {
    return `${_.kebabCase(this.name)}s`;
  }

  static get url() {
    return `/api/${this.typeKey}.json`;
  }

  get url() {
    return `/api/${this.constructor.typeKey}/${this.id}.json`;
  }

  static all() {
    return new Promise((resolve, reject) => {
      this.__http.get(this.url).then((serials) => {
        if(_.isString(serials)) {
          serials = JSON.parse(serials);
        }
        if(serials.length < 1) {
          resolve([]);
          return;
        }
        Promise.all(serials.map((serial) => {
          return this.deserialize(serial);
        })).then(resolve, reject);
      }, reject);
    });
  }

  static clear() {
    return new Promise((resolve, reject) => {
      this.all().then(function(models = []) {
        if(models.length < 1) {
          resolve(models);
          return;
        }
        Promise.all(models.map(function(model) {
          return model.destroy();
        })).then(resolve, reject);
      }, reject);
    });
  }

  static create(params = {}) {
    return new Promise((resolve, reject) => {
      this.__http.post(this.url, {data: params}).then((response) => {
        if(_.isString(response)) {
          response = JSON.parse(response);
        }
        this.deserialize(response).then(resolve, reject);
      }, reject);
    });
  }

  static deserialize(serial = {}) {
    return new Promise((resolve, reject) => {
      if(_.isArray(serial)) {
        resolve(serial.map((item) => {
          return new this(item);
        }));
        return;
      }
      resolve(new this(serial));
    });
  }

  static find(params = {}) {
    return new Promise((resolve, reject) => {
      this.all().catch(reject).then((models) => {
        resolve(models.filter(function(model) {
          for(let key in params) {
            let value = model[key];
            if(value !== undefined) {
              if(params[key] !== value) {
                return false;
              }
            }
          }
          return true;
        }));
      });
    });
  }

  static uniq(params = {}) {
    return new Promise((resolve, reject) => {
      this.find(params).catch(reject).then(function(models) {
        let model = models[0];
        resolve(model);
      });
    });
  }

  constructor(params = {}) {
    //_.merge(this.constructor, _.pick(Model, 'all', 'clear', 'create', 'deserialize', 'find', 'uniq'));
    _.merge(this, params);
  }

  destroy() {
    return new Promise((resolve, reject) => {
      this.constructor.__http.delete(this.url).then(() => {
        resolve(this);
      }, reject);
    });
  }

  load() {
    return this.constructor.find({
      id: this.id
    });
  }

  save() {
    return new Promise((resolve, reject) => {
      this.constructor.__http.put(this.url, {
        data: this.serialize()
      }).then(() => {
        resolve(this);
      }, reject);
    });
  }

  serialize() {
    return new Promise((resolve, reject) => {
      const {attributes} = this.constructor;
      const args = [this].concat(attributes);
      const serial = _.pick.apply(_, args);
      resolve(serial);
    });
  }

}

Model.__http = new HTTPClient();

export default Model;
