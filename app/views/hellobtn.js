var Marionette = require('backbone.marionette');
var _ = require('underscore');
var dictionary = require('../dictionary.js');
var tpl = require('./hellobtn.hbs');

module.exports = Marionette.View.extend({
  template: tpl,

  templateContext: function () {
    return {
      _1NOMINATE_BTN: dictionary.pick("_1NOMINATE_BTN")["_1NOMINATE_BTN"]
    }
  },

  events: {
      'click .btn-login': 'login'
    },

   login: function (e) {
      var button = e.currentTarget;
      var isEnabled = !button.disabled;

      if (isEnabled) {
        button.disabled = true;
        button.classList.toggle('is-loading');
      }

      //when the button is clicked, set off the login to Facebook in the person model
      amnestyApp.Models.amnestyUser.login();
    }
});
