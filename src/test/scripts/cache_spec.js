describe('Cache', function() {

  var cache;

  beforeEach('Instantiate a Cache', function(done) {
    require(['sea-siege/cache'], function(Cache) {
      cache = new Cache();
      done();
    });
  });

  describe('#fetch', function() {

    context('when no cache entry exists for the given key', function() {

      it('should return undefined', function() {
        expect(cache.fetch('foo')).to.be.undefined;
      });

    });

    context('when a cache entry exists for the given key', function() {

      beforeEach(function() {
        cache.save('foo', 'bar');
      });

      it('should return the existing value', function() {
        expect(cache.fetch('foo')).to.equal('bar');
      });

    });

  });

  describe('#invalidate', function() {

    context('when no cache entry exists for the given key', function() {

      it('should leave the value for the key as undefined', function() {
        cache.invalidate('foo');
        expect(cache.fetch('foo')).to.be.undefined;
      });

    });

    context('when a cache entry exists for the given key', function() {

      beforeEach(function() {
        cache.save('foo', 'bar');
      });

      it('should remove the existing value', function() {
        cache.invalidate('foo');
        expect(cache.fetch('foo')).to.be.undefined;
      });

    });

  });

  describe('#isCached', function() {

    context('when no cache entry exists for the given key', function() {

      it('should return false', function() {
        expect(cache.isCached('foo')).to.be.false;
      });

    });

    context('when a cache entry exists for the given key', function() {

      beforeEach(function() {
        cache.save('foo', 'bar');
      });

      it('should return true', function() {
        expect(cache.isCached('foo')).to.be.true;
      });

    });

  });

  describe('#save', function() {

    context('when no cache entry exists for the given key', function() {

      it('should set the value', function() {
        cache.save('foo', 'bar');
        expect(cache.fetch('foo')).to.equal('bar');
      });

    });

    context('when a cache entry exists for the given key', function() {

      beforeEach(function() {
        cache.save('foo', 'bar');
      });

      it('should set the value to the new value', function() {
        cache.save('foo', 'baz');
        expect(cache.fetch('foo')).to.equal('baz');
      });

    });

  });

});
