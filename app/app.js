var App = Backbone.Marionette.Application.extend({
  region: '#app',

  onBeforeStart: function () {
    this.setLanguageFromDictionary();
  },

  onStart: function() {
    amnestyApp.mainRegion = this.getRegion();
    amnestyApp.Models.amnestyUser = new Person();

    amnestyApp.Views.hello = new HelloWorld({
      model: amnestyApp.Models.amnestyUser
    });
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
amnestyApp.Models = {};
amnestyApp.start();
