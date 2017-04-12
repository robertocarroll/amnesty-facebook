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
      amnestyApp.onGetFriends(response);
    });
  },

  onGetFriends: function (response) {

      //check the contents of the API call
      // console.log ("facebook API " + JSON.stringify(response.data));
      //new collection with response
      var list = new Friends (response.data);
      // console.log ("collection is " + list.length);

      //new view with collection
      var myFriends = new FriendsView ({
        collection: list
      });

      myFriends.render();
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
              /* handle the result */
            }
          }
      );
    }

});

var amnestyApp = new App();
amnestyApp.start();
