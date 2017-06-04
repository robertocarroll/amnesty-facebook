var Marionette = require('backbone.marionette');
var _ = require('underscore');
var dictionary = require('../dictionary.js');
var tpl = require('./friendserror.hbs');

module.exports = Marionette.View.extend({
  template: tpl,
  templateContext: function () {
    return {
      _2NOMINATE_ERROR: dictionary.pick("_2NOMINATE_ERROR")["_2NOMINATE_ERROR"]
    }
  }
});
