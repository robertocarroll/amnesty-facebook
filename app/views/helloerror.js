var HelloError = Backbone.Marionette.View.extend({
  template: '#helloerror',
  templateContext() {
    return {
      _1NOMINATE_ERROR: dictionary.pick("_1NOMINATE_ERROR")["_1NOMINATE_ERROR"]
    }
  }
});
