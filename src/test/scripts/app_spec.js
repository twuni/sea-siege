describe('App', function() {

  var app;

  beforeEach('Instantiate an app', function(done) {
    require(['sea-siege/app'], function(App) {
      app = new App();
      done();
    });
  });

  describe('#renderTo', function() {

    var container;

    context('given a detached DOM node', function() {

      beforeEach('Create a DOM container', function() {
        container = document.createElement('div');
      });

      it('returns undefined', function() {
        expect(app.renderTo(container)).to.be.undefined;
      });

      it('appends a <noscript/> element', function() {
        app.renderTo(container);
        expect(container.querySelectorAll('noscript')).to.not.be.empty;
      });

    });

  });

});
