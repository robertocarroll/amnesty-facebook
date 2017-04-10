var HelloWorld = Backbone.Marionette.View.extend({
  el: '#app',
  template: '#hello',

  templateContext: _.pick(textStrings, "_1NOMINATE", "_1NOMINATE_DESC", "_1NOMINATE_BTN"),

  events: {
      'click .btn-login': 'login'
    },

   login: function () {
      console.log ("log in button fired");
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


