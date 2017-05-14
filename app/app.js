var App = Backbone.Marionette.Application.extend({
  region: '#app',

  onBeforeStart: function () {
    this.setLanguageFromDictionary();
  },

  onStart: function() {
    amnestyApp.mainRegion = this.getRegion();
    amnestyApp.Views.hello = new HelloWorld();
    amnestyApp.mainRegion.show(amnestyApp.Views.hello);
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
