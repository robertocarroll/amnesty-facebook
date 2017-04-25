var Friends = Backbone.PageableCollection.extend({
    model: Friend,
    initialize: function(options) {
        console.log ("options in Friends collection: " + options);
        this.token = options.token;
    },
    url: function(){
        return 'https://graph.facebook.com/me/taggable_friends'+'?access_token='+this.token;
    },
    parse: function(response) {
      console.log ("Collection response: " + JSON.stringify(response.data));
      console.log (response.data.length);
      return response.data;
    },
    mode: "infinite"
});
