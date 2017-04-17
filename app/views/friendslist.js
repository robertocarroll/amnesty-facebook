amnestyApp.Views.FriendsList = Backbone.Marionette.CollectionView.extend({
  tagName: 'div',
  className: 'friendsContainer bg-white-80',
  childView: amnestyApp.Views.FriendsListItem,

  childViewEvents: {
    'select:item': 'itemSelected'
  },

  itemSelected: function(childView) {
      var selectedModel = childView.model;
      console.log(selectedModel);
      var share = new amnestyApp.Views.Share({
         model: selectedModel
        }
      );
      share.render();
  }
});
