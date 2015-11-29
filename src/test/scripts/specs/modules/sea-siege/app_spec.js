describe('App', function() {

  lazy('App', function() {
    return library.App;
  });

  lazy('app', function() {
    return new this.App();
  });

  describe('#renderTo', function() {

    subject(function() {
      const {app, container} = this;
      return app.renderTo(container);
    });

    lazy('container', function() {
      return document.createElement('div');
    });

    context('given a detached DOM node', function() {

      it('should be undefined', function() {
        expect(this.subject).to.be.undefined;
      });

      it('should append a <noscript/> element', function() {
        this.subject;
        expect(this.container.querySelector('noscript')).not.to.be.undefined;
      });

    });

  });

});
