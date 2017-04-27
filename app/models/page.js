var Page = Backbone.Model.extend({
    defaults: {
      showPrev: false,
      showNext: true,
      currentPage: 0,
      lastPage: 10
    },

    initialize: function () {
      _.bindAll(this, "update");
        this.on('change:currentPage', this.update);
        // or, for all attributes
        // this.on('change', this.update);
    },

    update: function () {
        console.log("update to page model");
        if (this.currentPage === 0) {
         this.set ({"showPrev": false});
         console.log("Hiding previous button");
        }

        else {
          this.set ({"showPrev": true});
        }

        if (this.currentPage === this.lastPage) {
         this.set ({"showNext": false});
         console.log("Hiding previous button");
        }

        else {
          this.set ({"showNext": true});
        }
    }
});
