var FriendsList = Backbone.Marionette.CollectionView.extend({
  tagName: 'div',
  className: 'friendsContainer bg-white-80',
  childView: FriendsListItem
});
