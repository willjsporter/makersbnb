
const Browser = require('zombie');

// We're going to make requests to http://example.com/signup
// Which will be routed to our test server localhost:3000
Browser.localhost('somestring', 3000);

describe('User visits signup page', function() {

  const browser = new Browser();

  before(function(done) {
    browser.visit('/firstpage', done);
  });

  describe('submits form', function() {

    it('should be successful', function() {
      browser.assert.success();
    });

    it('should show text', function() {
      browser.assert.text('body', "Legend BnB Firstpage Property List Add Property Welcome to Legend BnB Log in and open up the world: © Copyright 2017 The Legend Group");
    });

    it('should have log-in form on firstpage', function(){
      browser.assert.input('form input[name=text]', 'Username')
      browser.assert.input('form input[password=text]', 'Password')
    });

    it('should redirect you to a sign up page through a button', function(){

    });



    // it('should see welcome page', function() {
    //   browser.assert.text('title', 'Welcome To Brains Depot');
    // });
  });
});
