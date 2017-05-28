var FriendsError = Backbone.Marionette.View.extend({
  template: '#friendsError',
  templateContext() {
    return {
      _2NOMINATE_ERROR: dictionary.pick("_2NOMINATE_ERROR")["_2NOMINATE_ERROR"]
    }
  }
});
