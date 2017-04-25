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
  },

  postToFacebook: function(facebookPost) {
 /*     {
              "message": "This is a test message",
              "tags": "user id of tagged friend",
              "place": "Page ID of a location associated with this post."
          }
*/    console.log("posting to Facebook " + JSON.stringify(facebookPost));
      FB.api(
          "/me/feed",
          "POST",
          facebookPost,
          function (response) {
            if (response && !response.error) {
              console.log ('Success - Post ID: ' + response.id);
              var success = new Success();
              success.render();
            }
            else{
              console.log(response.error);
            }
          }
      );
    }

});

var amnestyApp = new App();
amnestyApp.Views = {};
amnestyApp.start();
