var FriendsListItem = Backbone.Marionette.View.extend({
  tagName: 'article',
  className: 'friends-list-item dt w-100 bb b--black-05 pb2 mt2 hvr-sweep-to-left',
  template: '#friendslistitem',

  triggers: {
    'click': 'select:item'
  }
});
