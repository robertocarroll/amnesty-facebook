var Marionette = require('backbone.marionette');
var dictionary = require('../dictionary.js');
var tpl = require('./friendslistitem.hbs');

module.exports = Backbone.Marionette.View.extend({
  tagName: 'article',
  className: 'friends-list-item dt w-100 bb b--black-05 pb2 mt2 hvr-sweep-to-left',
  template: tpl,

  triggers: {
    'click': 'select:item'
  }
});
