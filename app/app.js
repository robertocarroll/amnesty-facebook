var App = Backbone.Marionette.Application.extend({
  region: '#app',

  onStart: function() {
    var hello = new HelloWorld();
    hello.render();
    this.showView(hello);
  },

  onFacebookLogin: function (response) {
    console.log("Logged in to Facebook!");
    console.log(response);
    console.log(response.authResponse);

    FB.api("/me", function (user) {
    	console.log("We got a user!");

      amnnestyUser = new Person(user);
      console.log(amnnestyUser);
    });

    FB.api("/me/taggable_friends", function (response) {
    	console.log("We got taggable friends!");
    	console.log(response);
    });
  }
});

var amnestyApp = new App();
amnestyApp.start();
