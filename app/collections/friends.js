var Friends = Backbone.PageableCollection.extend({
  model: Friend,
  url: "https://graph.facebook.com/me/taggable_friends",
  mode: "infinite"
});
