var Friends = Backbone.PageableCollection.extend({
    model: Friend,
    initialize: function(options) {
        this.token = options.token;
    },
    url: function(){
        return 'https://graph.facebook.com/me/taggable_friends'+'?access_token='+this.token;
    },
    parse: function(response) {
      console.log (response.paging);
      return response.data;
    },
    mode: "infinite"
});
