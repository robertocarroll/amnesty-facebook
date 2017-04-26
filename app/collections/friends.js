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
    parseRecords: function(response) {
      return response.data;
    },
    parseLinks: function (response, xhr) {
      console.log (response.paging);
      if (response.paging.previous == null){
        console.log ("It's the first page! " + response.paging.previous);
      }

      if (response.paging.next == null){
        console.log ("It's the last page! " + response.paging.next);
      }

      return response.paging;
    }
});
