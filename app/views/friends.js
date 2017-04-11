var FriendsView = Backbone.Marionette.View.extend({
  el: '#app',
  tagName: 'table',
  className: 'table table-hover',
  template: '#friends',

  templateContext: _.pick(textStrings, "_1NOMINATE_DESC"),

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
