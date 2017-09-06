const Browser = require('zombie');
var Property = require('../server/models/property.js');
// '../server/models/property.js'

// We're going to make requests to http://example.com/signup
// Which will be routed to our test server localhost:3000
Browser.localhost('localhost', 3000);

describe('Makersbnb app', function() {

  const browser = new Browser();

  describe('homepage', function() {
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

      it('should have log-in form on homepage', function(){
        browser.assert.element('form');
        browser.assert.element('form input[name=password]');
        browser.assert.element('form input[name=username]');
        // browser.pressButton("Welcome Back",)
        // done();
      });
    });
  });

  xdescribe('Log in', function() {
      before(function(done) {
        browser.visit('/', function(){
        browser.fill('username', 'Muffin')
        browser.fill('password', 'Secrete')
        browser.pressButton("Welcome Back!",done);
      });

      it("has a log in form which can be filled in", function() {
      });
    });
  });


  describe('property list should load', function() {
    before(function(done) {
      browser.visit('/propertylist', done);
    });

    it('property list should have a title of MakersBnb', function() {
      browser.assert.text('title', 'MakersBnB');
    });

  });

  describe('add property should load', function() {
    before(function(done) {
      browser.visit('/addproperty', done);
    });

    it('should have a title of MakersBnb', function() {
      browser.assert.text('title', 'MakersBnB');
    });
  });



  describe('add property should add a property', function() {

    before(function(done) {
      browser.visit('/addproperty', function() {
        browser.fill('name', 'Makerz')
        browser.fill('location', '123 Makers Academy St')
        browser.fill('description', 'misery-land')
        browser.fill('price', '£90 per night trololololol')
        browser.pressButton('Add!',done);
      });
    });

    it('should have property list on page', function(){
      browser.assert.text('title', 'MakersBnB');
    });

    xit('should have added the property to the list', function(){
      browser.assert.text('body', '123 Makers Academy St');
    });

  });

  describe('viewing properties', function() {

    before(function(done) {
      var prop1 = {name: 'Lakers', location: 'commercial street', description: 'basketball camp', price: '£89 per day'}
      Property.create(prop1).then(property => {console.log('success')})
    });

    it('should create an instance of property', function() {
      browser.visit('/propertylist', done);
      browser.assert.text('body', 'commercial street');
    });
  });
});
