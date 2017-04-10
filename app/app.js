var App = Backbone.Marionette.Application.extend({
  region: '#app',

  onStart: function() {
    var hello = new HelloWorld();
    hello.render();
    this.showView(hello);
  },

  onFacebookLogin: function (response) {
  //  console.log("Logged in to Facebook!");
   // console.log(response);
  //  console.log(response.authResponse);


    FB.api("/me/taggable_friends", function (response) {
      console.log("We got taggable friends!");
      console.log(response);
      //new collection with response
      var amnestyFriends = new Friends (response);

      //new view with collection
      var friends = new PickFriends({collection: amnestyFriends});
      friends.render();
    });
  }
});

var amnestyApp = new App();
amnestyApp.start();
