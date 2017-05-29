var ShareError = Backbone.Marionette.View.extend({
  initialize: function (attrs) {
    this.options = attrs;
    var errorMessage = this.options.errorMessage;
  },
  template: '#shareerror',

  templateContext: function () {
    return {
      _3NOMINATE_ERROR: dictionary.pick("_3NOMINATE_ERROR")["_3NOMINATE_ERROR"]
    }
  }

});
