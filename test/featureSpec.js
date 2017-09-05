const Browser = require('zombie');
var Property = require('../server/models/property.js');
// '../server/models/property.js'

// We're going to make requests to http://example.com/signup
// Which will be routed to our test server localhost:3000
Browser.localhost('localhost', 3000);

describe('Makersbnb app', function() {

  const browser = new Browser();

  describe('homepage loads', function() {
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

  xdescribe('property list', function() {
    before(function(done) {
      browser.visit('/propertylist', done);
    });

    it('should have a title of MakersBnb', function() {
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



  xdescribe('add property should add a property', function() {

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

    it('should have added the property to the list', function(){
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
