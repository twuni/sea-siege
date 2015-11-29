describe('Cache', function() {

  lazy('Cache', function() {
    return library.Cache;
  });

  lazy('cache', function() {
    return new this.Cache();
  });

  describe('#fetch', function() {

    subject(function() {
      return this.cache.fetch('foo');
    });

    context('when no cache entry exists for the given key', function() {

      it('should be undefined', function() {
        expect(this.subject).to.be.undefined;
      });

    });

    context('when a cache entry exists for the given key', function() {

      beforeEach(function() {
        this.cache.save('foo', 'bar');
      });

      it('should equal the existing value', function() {
        expect(this.subject).to.equal('bar');
      });

    });

  });

  describe('#invalidate', function() {

    subject(function() {
      return this.cache.invalidate('foo');
    });

    context('when no cache entry exists for the given key', function() {

      it('should leave the value for the key as undefined', function() {
        this.subject;
        expect(this.cache.fetch('foo')).to.be.undefined;
      });

    });

    context('when a cache entry exists for the given key', function() {

      beforeEach(function() {
        this.cache.save('foo', 'bar');
      });

      it('should remove the existing value', function() {
        this.subject;
        expect(this.cache.fetch('foo')).to.be.undefined;
      });

    });

  });

  describe('#isCached', function() {

    subject(function() {
      return this.cache.isCached('foo');
    });

    context('when no cache entry exists for the given key', function() {

      it('should return false', function() {
        expect(this.subject).to.be.false;
      });

    });

    context('when a cache entry exists for the given key', function() {

      beforeEach(function() {
        this.cache.save('foo', 'bar');
      });

      it('should return true', function() {
        expect(this.subject).to.be.true;
      });

    });

  });

  describe('#save', function() {

    subject(function() {
      return this.cache.save('foo', 'bar');
    });

    context('when no cache entry exists for the given key', function() {

      it('should set the value', function() {
        this.subject;
        expect(this.cache.fetch('foo')).to.equal('bar');
      });

    });

    context('when a cache entry exists for the given key', function() {

      it('should set the value to the new value', function() {
        this.subject;
        this.cache.save('foo', 'baz');
        expect(this.cache.fetch('foo')).to.equal('baz');
      });

    });

  });

});
