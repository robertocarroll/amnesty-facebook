var Marionette = require('backbone.marionette');
var tpl = require('./friendsnone.hbs');

module.exports = Backbone.Marionette.View.extend({
  template: tpl,
  templateContext: dictionary.pick("_2NOMINATE_NONE")
});
