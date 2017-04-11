var FriendsList = Backbone.Marionette.CollectionView.extend({
  tagName: 'tbody',
  childView: FriendsListItem
});
