var Marionette = require('backbone.marionette');
var _ = require('underscore');
var dictionary = require('../dictionary.js');
var FriendsList = require('./friendslist.js');
var FriendsError = require('./friendserror.js');
var FriendsNone = require('./friendsnone.js');
var tpl = require('./friends.hbs');

module.exports = Marionette.View.extend({
  el: '#app',
  template: '#friends',

  templateContext: function () {
    return {
      _1NOMINATE: dictionary.pick("_1NOMINATE")["_1NOMINATE"],
      _1NOMINATE_DESC: dictionary.pick("_1NOMINATE_DESC")["_1NOMINATE_DESC"],
      _2NOMINATE_CALL: dictionary.pick("_2NOMINATE_CALL")["_2NOMINATE_CALL"]
    }
  },

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
      success: function (collection) {
      // the length shows max 25 due to pagination but that's OK
      // because we are just checking they have friends
        if (collection.length === 0) {
          self.render();
          var nextpreviousEl = document.getElementById('next-previous');
          nextpreviousEl.setAttribute('aria-hidden', 'true');
          amnestyApp.Views.myFriends.showChildView('body', new FriendsNone());
        }
        else {
          self.render();
          self.updatePaginationControls();
        }
      },
      error: function (collection) {
        //show the start view again
        amnestyApp.mainRegion.show(amnestyApp.Views.hello);
        //but with a message that the friends didn't work
        amnestyApp.Views.hello.showChildView('facebookErrorRegion', new FriendsError());
      }

    });
  },

  updatePaginationControls: (function () {
    return _.debounce(function updatePaginationControls() {
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
    }, 250);
  })(),

  onRender: function() {
    this.showChildView('body', new FriendsList({
      collection: this.collection
    }));

    this.updatePaginationControls();
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
