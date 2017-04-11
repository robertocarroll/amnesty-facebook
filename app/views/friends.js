var FriendsView = Backbone.Marionette.View.extend({
  el: '#app',
  className: 'table table-hover',
  template: '#friends',

  templateContext: _.pick(textStrings, "_1NOMINATE","_1NOMINATE_DESC"),

  regions: {
    body: {
      el: '.friendsList',
      replaceElement: true
    }
  },

  onRender: function() {
    this.showChildView('body', new FriendsList({
      collection: this.collection
    }));
  }
});
