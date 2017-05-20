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

  loadFacebookApi: new Promise(function (resolve, reject) {
    (function(d, s, id){
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {return;}
      js = d.createElement(s); js.id = id;
      js.src = "//connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));// TODO: handle errors

    window.fbAsyncInit = function() {
      FB.init({
        appId       : '148573185670966',
        status      : true, // check login status
        cookies     : true, // enable cookies to allow server to access session,
        xfbml       : true,
        version     : 'v2.8'
      });
      FB.AppEvents.logPageView();
      amnestyApp.Views.hello.showChildView('facebookCallRegion', new HelloBtn());
      console.log ("Facebook loaded");
      resolve();
    };
  }),

  loadDictionaryStrings: new Promise(function (resolve, reject) {
    dictionary.loadStrings("data/dictionary.json").then(function () {
      resolve();
      console.log("Yup, dictionary strings loaded.");
      // TODO: handle errors
    });
  }),

  setLanguageFromDictionary: function (){
    dictionary && this.loadDictionaryStrings.then(function () {
      var backgroundImage = dictionary.pick("_BACKGROUND");
      backgroundImage = backgroundImage["_BACKGROUND"];
      backgroundImage = "images/" + backgroundImage;
      document.getElementsByTagName('html')[0].setAttribute("lang", dictionary.getLang());
      document.getElementById("main").style.backgroundImage = "url(" + backgroundImage + ")";
    });
  }

});

var amnestyApp = new App();
amnestyApp.Views = {};

$(document).ready(function(){
  Promise.all([
    amnestyApp.loadFacebookApi,
    amnestyApp.loadDictionaryStrings
  ])
  .then(function () {
    console.log("Starting app!");
    amnestyApp.start();
  });
});



