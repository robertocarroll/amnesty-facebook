var Marionette = require('backbone.marionette');
var tpl = require('./friendserror.hbs');

module.exports = Marionette.View.extend({
  template: tpl,
  templateContext: function () {
    return {
      _2NOMINATE_ERROR: dictionary.pick("_2NOMINATE_ERROR")["_2NOMINATE_ERROR"]
    }
  }
});
