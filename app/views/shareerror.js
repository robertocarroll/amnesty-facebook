var ShareError = Backbone.Marionette.View.extend({
  initialize: function (attrs) {
    this.options = attrs;
    var errorMessage = this.options.errorMessage;
  },
  template: '#shareError',
  templateContext: dictionary.pick("_3NOMINATE_ERROR")
});
