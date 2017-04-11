var FriendsView = Backbone.Marionette.View.extend({
  el: '#app',
  tagName: 'table',
  className: 'table table-hover',
  template: '#table',

  templateContext: _.pick(textStrings, "_1NOMINATE","_1NOMINATE_DESC"),

  regions: {
    body: {
      el: 'tbody',
      replaceElement: true
    }
  },

  onRender: function() {
    this.showChildView('body', new FriendsList({
      collection: this.collection
    }));
  }
});
