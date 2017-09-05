
const Browser = require('zombie');

// We're going to make requests to http://example.com/signup
// Which will be routed to our test server localhost:3000
Browser.localhost('somestring', 3000);

describe('User visits signup page', function() {

  const browser = new Browser();

  before(function(done) {
    browser.visit('/', done);
  });

  describe('submits form', function() {

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

    it('should have sign-in form on homepage', function(){
      browser.assert.input('form input[name=text]', 'username')
      browser.assert.input('form input[name=text]', 'username')
    });



    // it('should see welcome page', function() {
    //   browser.assert.text('title', 'Welcome To Brains Depot');
    // });
  });
});
