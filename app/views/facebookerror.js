var Marionette = require('backbone.marionette');
var tpl = require('./facebookerror.hbs');

module.exports = Marionette.View.extend({
  el: '#app',
  template: tpl,
  templateContext: function () {
    return {
      _1FACEBOOK_ERROR: dictionary.pick("_1FACEBOOK_ERROR")["_1FACEBOOK_ERROR"]
    }
  }
});
