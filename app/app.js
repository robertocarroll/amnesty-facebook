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
      var backgroundImage = dictionary.pick("_BACKGROUND");
      backgroundImage = backgroundImage["_BACKGROUND"];
      backgroundImage = "images/" + backgroundImage;
      document.getElementsByTagName('html')[0].setAttribute("lang", dictionary.getLang());
      document.getElementById("main").style.backgroundImage = "url(" + backgroundImage + ")";
    }
  }

});

var amnestyApp = new App();
amnestyApp.Views = {};
amnestyApp.start();
