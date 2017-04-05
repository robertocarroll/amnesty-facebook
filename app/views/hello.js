var HelloWorld = Backbone.Marionette.LayoutView.extend({
  el: '#app',  // 3
  template: require('./../templates/layout.html')
});

var hello = new HelloWorld();  // 5

hello.render();  // 6
