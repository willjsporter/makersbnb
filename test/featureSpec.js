const Browser = require('zombie');

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

  describe('property list', function() {
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

});
