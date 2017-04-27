var Page = Backbone.Model.extend({
    defaults: {
      showPrev: false,
      showNext: true,
      currentPage: 0,
      lastPage: 10
    },

    update: function () {
        console.log("update to page model");
        if (this.currentPage == 0) {
         this.set ({"showPrev": false});
        }

        if (this.currentPage == this.lastPage) {
         this.set ({"showNext": false});
        }
    }
});
