var HelloWorld = Backbone.Marionette.View.extend({
  el: '#app',
  template: _.template('<h1><%- _1NOMINATE %></h1><p><%- _1NOMINATE_DESC %></p><button><%- _1NOMINATE_BTN %></button>'),

  templateContext: _.pick(textStrings, "_1NOMINATE", "_1NOMINATE_DESC", "_1NOMINATE_BTN")

});

var hello = new HelloWorld();
hello.render();
