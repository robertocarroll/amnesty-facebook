var Person = Backbone.Model.extend({
    defaults: {
      facebookID: null,
      name: null,
    },
    initialize: function(){},

    login: function(){

      this._getuserdata = function (callback) {
        console.log('_getuserdata called;');
        FB.api("/me", function (user) {
          console.log("We got a user!");
          this.set ({
                facebookID: user['id'],
                name: user['name']
              }, {
                silent: true
              });
        });
      }

      FB.login(function(response) {
        if (response.status === 'connected') {
          console.log ("logged in");
          amnestyApp.onFacebookLogin(response);
        } else {
          console.log ("The person is not logged into this app or we are unable to tell.");
        }
      }, {scope:'public_profile,user_friends,publish_actions', return_scopes:true});
    }

});
