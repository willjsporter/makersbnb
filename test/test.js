
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
      browser.assert.text('body', "Legend BnB Firstpage Property List Add Property Welcome to Legend BnB Log in and open up the world: Username: Top Secrete Word: Would You Like to Sign up? © Copyright 2017 The Legend Group");
    });

    it('should have log-in form on firstpage', function(done){
      browser.assert.element('form');
      browser.assert.element('form input[name=password]');
      browser.assert.element('form input[name=username]');
      // browser.pressButton("Welcome Back.")
      done();
    });
  });

describe('Log in', function() {

it("has a log in form which can be filled in", function() {
    before(function(done) {
      browser.visit('/firstpage', function(){
      browser.fill('username', 'Muffin')
      browser.fill('password', 'Secrete')
      browser.pressButton("Welcome Back!",done);
      });
    });
  });
  // it('Should display the user name on the property list page', function(){
  //
  // })
});
});



    // it('should redirect you to a sign up page through a button', function(){
    //    browser.pressButton("Sign Up")
    //    browser.assert.viewInBrowser('/signup')
    // });
