var HelloWorld = Backbone.Marionette.View.extend({
  el: '#app',  // 3
  template: _.template('<h1>Hello, <%- contextKey %></h1>'),

  templateContext: {
    contextKey: 'world boo'
  }
});

var hello = new HelloWorld();

hello.render();