var ShareError = Backbone.Marionette.View.extend({
  initialize: function (attrs) {
    this.options = attrs;
    var errorMessage = this.options.errorMessage;
  },
  template: '#shareerror',
  templateContext: dictionary.pick("_3NOMINATE_ERROR")
});
