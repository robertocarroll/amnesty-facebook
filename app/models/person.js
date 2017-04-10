var Person = Backbone.Model.extend({
    defaults: {
      facebookID: null,
      name: null,
    },
    initialize: function(){},

    login: function(){
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
