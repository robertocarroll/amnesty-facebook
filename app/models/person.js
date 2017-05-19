var Person = Backbone.Model.extend({
    defaults: {
      facebookID: null,
      name: null,
      email: null,
      location: null,
      loggedIn: null,
      token: null
    },

    login: function(){
      var self = this;

      FB.login(function(response) {
        if (response.status === 'connected') {

          var token = response.authResponse.accessToken;
          self.set ('token', token);
          self.set ('loggedIn', 'true');
          self.getUserDetails();
        }

        else {
          self.set ('loggedIn', 'false');
        }
      }, {scope:'public_profile,email,user_friends,publish_actions,user_location', return_scopes:true});
    },

    getUserDetails: function () {
      var self = this;

      FB.api('/me?fields=id,name,email,location,permissions', function(response) {
          self.set ({
            "facebookID": response.id,
            "name": response.name,
            "email": response.email,
            "location": (response && response.location && response.location.name || "")
          });
          console.log (self.attributes);
      });
    }
});
