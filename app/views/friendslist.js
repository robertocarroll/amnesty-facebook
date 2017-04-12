var FriendsList = Backbone.Marionette.CollectionView.extend({
  tagName: 'div',
  className: 'friendsContainer bg-white-80',
  childView: FriendsListItem,

  childViewEvents: {
    'select:item': 'itemSelected'
  },

  itemSelected: function(childView) {
      e.preventDefault();
      console.log (e);
      var name = childView.model.get("name");
      alert(name);
  }
});
