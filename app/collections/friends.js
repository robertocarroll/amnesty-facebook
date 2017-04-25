var Friends = Backbone.PageableCollection.extend({
  //GET /v2.9/{user-id}/taggable_friends HTTP/1.1
  //see https://developers.facebook.com/docs/graph-api/reference/user/taggable_friends
    model: Friend,
    initialize: function(options) {
        console.log ("options in Friends collection: " + options);
        this.token = options.token;
    },
    url: function(){
        return 'https://graph.facebook.com/me/v2.8/taggable_friends'+'?'+this.token;
    },
  mode: "infinite"
});
