class Cache {

  static get defaultLifespan() {
    return 30;
  }

  constructor(options = {}) {
    this.__entries = {};
    this.defaultLifespan = options.defaultLifespan || this.constructor.defaultLifespan;
  }

  fetch(key) {
    const entry = this.__entries[key];
    if(entry === undefined) {
      return undefined;
    }
    const value = entry[0];
    const expires = entry[1];
    const now = Date.now();
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
    const now = Date.now();
    const effectiveLifespan = 1000 * (lifespan || this.defaultLifespan);
    const expires = now + effectiveLifespan;
    const entry = [value, expires];
    this.__entries[key] = entry;
    return value;
  }

}

export default Cache;
