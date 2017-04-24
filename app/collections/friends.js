var Friends = Backbone.PageableCollection.extend({
  //GET /v2.9/{user-id}/taggable_friends HTTP/1.1
  //see https://developers.facebook.com/docs/graph-api/reference/user/taggable_friends
  model: Friend,
  url: "https://graph.facebook.com/me/taggable_friends",
  mode: "infinite"
});
