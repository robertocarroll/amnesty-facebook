var Person = Backbone.Model.extend({
    defaults: {
      facebookID: null,
      name: null,
      email: null
    },

    login: function(){

      var self = this;

      FB.login(function(response) {
        if (response.status === 'connected') {
          var token = response.authResponse.accessToken;
          amnestyApp.Views.myFriends = new FriendsView ({
             token: token
          });

          self.getUserDetails();
        } else {
          console.log ("The person is not logged into this app or we are unable to tell.");
        }
      }, {scope:'public_profile,email,user_friends,publish_actions', return_scopes:true});
    },

    getUserDetails: function () {
      var self = this;

      FB.api('/me?fields=id,name,email,permissions', function(response) {
          self.set ({
            "facebookID": response.id,
            "name": response.name,
            "email": response.email,
          });
      });
    }

});
