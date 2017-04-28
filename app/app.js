var App = Backbone.Marionette.Application.extend({
  region: '#app',

  onBeforeStart: function () {
    this.setLanguageFromDictionary();
  },

  onStart: function() {
    amnestyApp.Views.hello = new HelloWorld();
    amnestyApp.Views.hello.render();
    this.showView(amnestyApp.Views.hello);
  },

  setLanguageFromDictionary: function (){
    if (dictionary) {
      document.getElementsByTagName('html')[0].setAttribute("lang", dictionary.getLang());
    }
  }

});

var amnestyApp = new App();
amnestyApp.Views = {};
amnestyApp.start();
