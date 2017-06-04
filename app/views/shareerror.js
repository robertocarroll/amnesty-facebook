var Marionette = require('backbone.marionette');
var _ = require('underscore');
var tpl = require('./shareerror.hbs');

module.exports = Marionette.View.extend({
  initialize: function (attrs) {
    this.options = attrs;
    var errorMessage = this.options.errorMessage;
  },
  template: tpl,

  templateContext: function () {
    return {
      _3NOMINATE_ERROR: dictionary.pick("_3NOMINATE_ERROR")["_3NOMINATE_ERROR"]
    }
  }

});
