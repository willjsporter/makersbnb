const Browser = require('zombie');
// var Property = require('../server/models');

Browser.localhost('localhost', 3000);

describe('Makersbnb signup', function() {

  const browser = new Browser();

  describe('homepage', function() {
    before(function(done) {
      browser.visit('/firstpage', function() {
        browser.pressButton('YES!', done);
      });
    });


    describe('goes to signup page', function() {
      it('should be successful', function() {
        browser.assert.success();
      });
    });

    describe('has a signup form', function() {
      it('should have form attributes', function(){
        browser.assert.elements('form');
        browser.assert.element('form input[name=username]');
        browser.assert.element('form input[name=email]');
        browser.assert.element('form input[name=password]');
      });
    });
  });
});
