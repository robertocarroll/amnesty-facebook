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

  initialize: function (attrs) {
    this.options = attrs;
    var self = this;
    var token = this.options.token;
    this.collection = new Friends({token: token});
    this.collection.fetch({
      success: function () {
        self.render();
      }
    });

    this.currentFriendsPage = new Page();
  },

  onRender: function() {
    this.showChildView('body', new FriendsList({
      collection: this.collection
    }));
  },

  events: {
    'click #next': 'next',
    'click #previous': 'previous'
  },

  next: function () {
    this.collection.getNextPage();
    this.currentFriendsPage.set('currentPage', this.currentFriendsPage.get('currentPage') + 1);
    console.log ("Show previous btn: " + this.currentFriendsPage.attributes.showPrev);
    console.log ("Show next btn: " + this.currentFriendsPage.attributes.showNext);
  },

  previous: function () {
    this.collection.getPreviousPage();
    this.currentFriendsPage.set('currentPage', this.currentFriendsPage.get('currentPage') - 1);
    console.log ("Show previous btn: " + this.currentFriendsPage.attributes.showPrev);
    console.log ("Show next btn: " + this.currentFriendsPage.attributes.showNext);
  }
});
