var App = Backbone.Marionette.Application.extend({
  region: '#app',

  onStart: function() {
    var hello = new HelloWorld();
    hello.render();
    this.showView(hello);
  }
});

var amnestyApp = new App();
amnestyApp.start();
