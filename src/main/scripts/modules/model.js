import HTTPClient from './http-client';

class Model {

  static get url() {
    return '/api/models.json';
  }

  get url() {
    return `/api/models/${this.id}.json`;
  }

  static all() {
    return new Promise((resolve, reject) => {
      HTTPClient.get(this.url).then((serials) => {
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
      HTTPClient.post(this.url, {data: params}).then((response) => {
        this.deserialize(response).then(resolve, reject);
      }, reject);
    });
  }

  static deserialize(serial = {}) {
    return new Promise((resolve, reject) => {
      let deserialized = new this(serial);
      resolve(deserialized);
    });
  }

  static find(params = {}) {
    return new Promise((resolve, reject) => {
      HTTPClient.get(new this(params).url).then((response) => {
        this.deserialize(response).then(resolve, reject);
      }, reject);
    });
  }

  constructor(params = {}) {
    this.id = params.id;
  }

  destroy() {
    return new Promise((resolve, reject) => {
      HTTPClient.delete(this.url).then(() => {
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
      HTTPClient.put(this.url, {
        data: this.serialize()
      }).then(() => {
        resolve(this);
      }, reject);
    });
  }

  serialize() {
    return new Promise((resolve, reject) => {
      let serial = {
        id: this.id
      };
      resolve(serial);
    });
  }

}

export default Model;
