var TableView = Backbone.Marionette.View.extend({
  tagName: 'table',
  className: 'table table-hover',
  template: '#table',

  regions: {
    body: {
      el: 'tbody',
      replaceElement: true
    }
  },

  onRender: function() {
    this.showChildView('body', new TableBody({
      collection: this.collection
    }));
  }
});
