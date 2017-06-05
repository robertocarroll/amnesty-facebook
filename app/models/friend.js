var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
Backbone.$ = $;
var Marionette = require('backbone.marionette');

module.exports = Backbone.Model.extend({
    defaults: {
      id: null,
      name: null,
      picture: null
    }
});
