var Friends = Backbone.PageableCollection.extend({
    model: Friend,
    initialize: function(options) {
        this.token = options.token;
    },
    url: function(){
        return 'https://graph.facebook.com/me/taggable_friends'+'?access_token='+this.token;
    },
    mode: "infinite",
    state: {
      firstPage: 0
    },
    queryParams: {
      pageSize: "limit",
      currentPage: null,
      offset: function () { return this.state.currentPage * this.state.pageSize; }
    },
    parse: function(response) {
      return response.data;
    },
    parseLinks: function (response, xhr) {
      return response.paging;
    }
});
