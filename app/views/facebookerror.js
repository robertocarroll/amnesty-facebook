var FacebookError = Backbone.Marionette.View.extend({
  el: '#app',
  template: '#facebookerror',
  templateContext: function () {
    return {
      _1FACEBOOK_ERROR: dictionary.pick("_1FACEBOOK_ERROR")["_1FACEBOOK_ERROR"]
    }
  }
});
