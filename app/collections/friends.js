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

      if (response.paging.next == null ) {
        // set the lastPage in the page model
        //this.model.set('lastPage', this.state.currentPage);
      }

      return response.paging;
    }
});
