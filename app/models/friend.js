var Backbone = require('backbone');

module.exports = Backbone.Model.extend({
    defaults: {
      id: null,
      name: null,
      picture: null
    }
});
