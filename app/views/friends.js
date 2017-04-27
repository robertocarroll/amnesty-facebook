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
    
    self.options.hasNextPage = this.collection.hasNextPage();
    self.options.hasPreviousPage = this.collection.hasPreviousPage();

    this.collection.on("pageable:state:change", function (e) {
      var hasNextPage = this.hasNextPage();
      var hasPreviousPage = this.hasPreviousPage();
      var hasChanged = false;

      if (self.options.hasNextPage !== hasNextPage) {
        self.options.hasNextPage = hasNextPage;
        hasChanged = true;
      }
      if (self.options.hasPreviousPage !== hasPreviousPage) {
        self.options.hasPreviousPage = hasPreviousPage;
        hasChanged = true;
      }

      if (hasChanged) {
        self.updatePaginationControls();
      }
    });
    this.collection.fetch({
      success: function () {
        self.render();
        self.updatePaginationControls();
      }
    });
  },

  updatePaginationControls: function () {
    var nextEl = document.getElementById('next');
    var previousEl = document.getElementById('previous');

    if (this.options.hasNextPage) {
      nextEl && nextEl.setAttribute('aria-hidden', 'false');
    }
    else {
      nextEl && nextEl.setAttribute('aria-hidden', 'true');
    }

    if (this.options.hasPreviousPage) {
      previousEl && previousEl.setAttribute('aria-hidden', 'false');
    }
    else {
      previousEl && previousEl.setAttribute('aria-hidden', 'true'); 
    }
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
  },

  previous: function () {
    this.collection.getPreviousPage();
  }
});
