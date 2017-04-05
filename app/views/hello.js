var HelloWorld = Backbone.Marionette.LayoutView.extend({
  el: '#app',  // 3
  template: require('./../templates/layout.html'),

  templateContext: {
    contextKey: 'world'
  }
});

var hello = new HelloWorld();

hello.render();
