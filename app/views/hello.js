var HelloWorld = Backbone.Marionette.View.extend({
  el: '#app',
  template: _.template('<h1>Hello, Jim</h1><button><%- _1NOMINATE_BTN %></button> <button><%- _2NOMINATE_BTN %></button>'),

  templateContext: _.pick(textStrings, "_1NOMINATE_BTN", "_2NOMINATE_BTN")

});

var hello = new HelloWorld();

hello.render();
