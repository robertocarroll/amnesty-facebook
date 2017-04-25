var FriendsView = Backbone.Marionette.View.extend({
  el: '#app',
  template: '#friends',

  templateContext: dictionary.pick("_1NOMINATE","_1NOMINATE_DESC","_2NOMINATE_CALL"),

  regions: {
    body: {
      el: '.friendsContainer',
      replaceElement: true
    }
  },

  //can I do the collection stuff here? But how do I pass the access token to the collection?

  /*initialize: function () {
    var self = this;
    this.collection = new Friends();
    this.collection.fetch({ success: function () { self.render(); } }); } });
  },*/

  onRender: function() {
    this.showChildView('body', new FriendsList({
      collection: this.collection
    }));
  },

  events: {
      'click #next': 'next'
    },

   next: function () {
    console.log(this.collection);
  }
});
