var FriendsList = Backbone.Marionette.CollectionView.extend({
  tagName: 'div',
  className: 'friendsContainer bg-white-80',
  childView: FriendsListItem,

  childViewEvents: {
    'select:item': 'itemSelected'
  },

  itemSelected: function(childView) {
      var selectedModel = childView.model;
      console.log(selectedModel);
      var share = new Share({
         model: selectedModel
        }
      );
      share.render();
  }
});
