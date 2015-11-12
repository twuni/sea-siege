class Cache {

  static get defaultLifespan() {
    return 30;
  }

  constructor(options = {}) {
    this.__entries = {};
    this.defaultLifespan = options.defaultLifespan || this.constructor.defaultLifespan;
  }

  fetch(key) {
    let entry = this.__entries[key];
    if(entry === undefined) {
      return undefined;
    }
    let value = entry[0];
    let expires = entry[1];
    let now = Date.now();
    if(expires < now) {
      this.invalidate(key);
      return undefined;
    }
    return value;
  }

  invalidate(key) {
    this.__entries[key] = undefined;
  }

  isCached(key) {
    return this.fetch(key) !== undefined;
  }

  save(key, value, lifespan) {
    let now = Date.now();
    let effectiveLifespan = 1000 * (lifespan || this.defaultLifespan);
    let expires = now + effectiveLifespan;
    let entry = [value, expires];
    this.__entries[key] = entry;
    return value;
  }

}

export default Cache;
