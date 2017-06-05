var FriendsNone = Backbone.Marionette.View.extend({
  template: '#friendsNone',
  templateContext: function () {
    return {
      _2NOMINATE_NONE: dictionary.pick("_2NOMINATE_NONE")["_2NOMINATE_NONE"]
    };
  }
});
