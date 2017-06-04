var Marionette = require('backbone.marionette');
var tpl = require('./helloerror.hbs');

module.exports = Marionette.View.extend({
  template: '#helloerror',
  templateContext: function () {
    return {
      _1NOMINATE_ERROR: dictionary.pick("_1NOMINATE_ERROR")["_1NOMINATE_ERROR"]
    }
  }
});
