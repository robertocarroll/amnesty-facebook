var FriendsList = Backbone.Marionette.CollectionView.extend({
  tagName: 'div',
  className: 'friendsContainer bg-white-80',
  childView: FriendsListItem,

  childViewEvents: {
    'select:item': 'itemSelected'
  },

  itemSelected: function(childView) {
      var name = childView.model.get("name");
      console.log(name);
      var share = new Share();
      share.render();
  }
});
