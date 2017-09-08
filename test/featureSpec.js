const Browser = require('zombie');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/makersbnb_test');

// We're going to make requests to http://example.com/signup
// Which will be routed to our test server localhost:3000
Browser.localhost('localhost', 3000);

describe('Makersbnb app', function() {
  // before(function (done) {
  //   this.timeout(15000);
  //   mongoose.connection.once('connected', () => {
  //     mongoose.connection.db.dropDatabase();
  //   });
  // });


  const browser = new Browser();

  describe('homepage', function() {
    before(function(done) {
      browser.visit('/', done);
    });

    describe('submits form', function() {
      it('should be successful', function() {
        browser.assert.success();
      });

      it('should show text', function() {
        browser.assert.text('h1', "Welcome to Legend BnB");
      });

      it('should have log-in form on homepage', function(){
        browser.assert.elements('form', 2);
        browser.assert.element('form input[name=password]');
        browser.assert.element('form input[name=username]');
      });
    });
  });

  describe('Log in', function() {
    before(function(done) {
      browser.visit('/', function(){
        browser.fill('username', 'Muffin')
        browser.fill('password', 'Secrete')
        browser.pressButton("Login",done);
      });
    });

    it("has a log in form which can be filled in", function() {
      browser.assert.text('h1', 'Welcome to Legend BnB Muffin');
    });;
  });

  describe('property list should load', function() {
    before(function(done) {
      browser.visit('/propertylist', done);
    });

    it('Should have an add property button', function() {
      browser.assert.text('h4', 'Would You Like to List a Property?');
      browser.assert.element('form input[name=addproperty]');
    });
  });

  describe('add property should load', function() {
    before(function(done) {
      browser.visit('/addproperty', done);
    });

    it('should have a form to add attributes', function() {
      browser.assert.elements('form');
      browser.assert.element('form input[name=location]');
      browser.assert.element('form input[name=description]');
      browser.assert.element('form input[name=price]');
    });
  });

  describe('add property should add a property', function() {

    before(function(done) {
      browser.visit('/addproperty', function() {
        browser.fill('location', '123 Makers Academy St')
        browser.fill('description', 'misery-land')
        browser.fill('price', '90')
        browser.pressButton('Add!',done);
      });
    });

    it('should have property list on page', function(){
      browser.assert.text('header', 'Legend BnB Homepage Property List Add Property');
    });

    it('should have added the property to the list', function(){
      browser.assert.attribute('#ol', '123 Makers Academy St');
    });
  });
});
