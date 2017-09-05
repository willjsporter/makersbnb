const Browser = require('zombie');

// We're going to make requests to http://example.com/signup
// Which will be routed to our test server localhost:3000
Browser.localhost('localhost', 3000);

describe('Makersbnb app', function() {

  const browser = new Browser();

  describe('submits form', function() {
    before(function(done) {
      browser.visit('/', done);
    });

    // before(function(done) {
    //   browser
    //     .fill('email',    'zombie@underworld.dead')
    //     .fill('password', 'eat-the-living')
    //     .pressButton('Sign Me Up!', done);
    // });

    it('should be successful', function() {
      browser.assert.success();
    });

    it('should show text', function() {
      browser.assert.text('body', "Hello World!");
    });
  });

  describe('submits form', function() {
    before(function(done) {
      browser.visit('/propertylist', done);
    });

    it('should be successful', function() {
      browser.assert.success();
    });

    it('should have a list of properties', function() {
      browser.assert.text('title', 'Property List');
    })
  });

});
