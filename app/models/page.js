var Pages = Backbone.Model.extend({
    defaults: {
      showPrev: false,
      showNext: true,
      currentPage: 0,
      lastPage: 10
    },

    showPrev: function(){
      //
      if (this.currentPage == 0) {
        this.set ({"showPrev": false});
      }
    },

    showNext: function(){
      //
      if (this.currentPage == this.lastPage) {
        this.set ({"showNext": false});
      }
    }
});
