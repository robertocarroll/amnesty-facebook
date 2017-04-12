var FriendsList = Backbone.Marionette.CollectionView.extend({
  tagName: 'div',
  className: 'friendsContainer',
  childView: FriendsListItem
});
