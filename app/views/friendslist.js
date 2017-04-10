var FriendsList = Backbone.Marionette.CollectionView.extend({
  tagName: 'friendsListBody',
  childView: FriendsListItem
});
