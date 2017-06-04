var Marionette = require('backbone.marionette');
var Share = require('./views/share.js');

module.exports = Backbone.Marionette.CollectionView.extend({
  tagName: 'div',
  className: 'friendsContainer bg-white-80',
  childView: FriendsListItem,

  childViewEvents: {
    'select:item': 'itemSelected'
  },

  itemSelected: function(childView) {
      var selectedModel = childView.model;
      console.log(selectedModel);
      amnestyApp.Views.share = new Share({
         model: selectedModel
        }
      );
      amnestyApp.mainRegion.empty();
      amnestyApp.mainRegion.show (amnestyApp.Views.share);
  }
});
