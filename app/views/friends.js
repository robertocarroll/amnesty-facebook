var PickFriends = Backbone.Marionette.View.extend({
  tagName: 'friendsList',
  className: 'friendsList',
  template: '#friendsList',

  templateContext: _.pick(textStrings, "_1NOMINATE", "_1NOMINATE_DESC", "_2NOMINATE_BTN","_2NOMINATE_CALL"),
  regions: {
    body: {
      el: 'friendsListBody',
      replaceElement: true
    }
  },

  onRender: function() {
    this.showChildView('body', new FriendsList({
      collection: this.collection
    }));
  }
});
