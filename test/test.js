// var assert = require('assert');
// describe('Array', function() {
//   describe('#indexOf()', function() {
//     it('should return -1 when the value is not present', function() {
//       assert.equal(-1, [1,2,3].indexOf(4));
//     });
//   });
// });
//
// process.env.NODE_ENV = 'test';
// var http = require("http");
// var app = require('../app');
// // use zombie.js as headless browser
// var Browser = require('zombie');
//
// describe('contact page', function() {
//   before(function() {
//     this.server = http.createServer(app).listen(3000);
//     // initialize the browser using the same port as the test application
//     this.browser = new Browser({ site: 'http://localhost:3000' });
//   });
//
//   // load the contact page
//   // before(function(done) {
//   //   this.browser.visit('/contact', done);
//   // });
//
//   it('should show contact a form', function() {
//     assert.ok(this.browser.success);
//     assert.equal(this.browser.text, 'Hello World!');
//     //assert.equal(this.browser.text('form label'), 'First NameLast NameEmailMessage');
//   });
//
//   //it('should refuse empty submissions');
//   // ...
//
// });


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
