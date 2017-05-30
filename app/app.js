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
    amnestyApp.Views.hello.showChildView('facebookCallRegion', new HelloBtn());
  },

  loadFacebookApi: new Promise(function (resolve, reject) {
    var facebookSDKTimeout,
        FACEBOOK_SDK_TIMEOUT_LIMIT = 1000 * 60;// 1 minute

    (function(d, s, id){
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {return;}
      js = d.createElement(s); js.id = id;
      js.onerror = function () {
        reject("error");
      };
      js.src = "//connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

    facebookSDKTimeout = window.setTimeout(function () {
      reject("timeout");
    }, FACEBOOK_SDK_TIMEOUT_LIMIT);

    window.fbAsyncInit = function() {
      window.clearTimeout(facebookSDKTimeout);
      FB.init({
        appId       : '148573185670966',
        status      : true, // check login status
        cookies     : true, // enable cookies to allow server to access session,
        xfbml       : true,
        version     : 'v2.8'
      });
      FB.AppEvents.logPageView();
      resolve();
    };
  }),

  setLanguageFromDictionary: function (){
    var backgroundImage = dictionary.pick("_BACKGROUND");
    backgroundImage = backgroundImage["_BACKGROUND"];
    backgroundImage = "images/" + backgroundImage;
    document.getElementsByTagName('html')[0].setAttribute("lang", dictionary.getLang());
    document.getElementById("main").style.backgroundImage = "url(" + backgroundImage + ")";
  }

});

var amnestyApp = new App();
amnestyApp.Views = {};
amnestyApp.Models = {};


$(document).ready(function(){
  amnestyApp.loadFacebookApi.then(function () {
    amnestyApp.start();
  }, function (errorDescription) {
    if (errorDescription === "error") {
      //show error message
      amnestyApp.Views.hello.showChildView('facebookErrorRegion', new HelloError());
    }
    else if (errorDescription === "timeout") {
      // TODO: handle Facebook API load timeout
      //show error message
      amnestyApp.Views.hello.showChildView('facebookErrorRegion', new HelloError());
    }
  });
});
