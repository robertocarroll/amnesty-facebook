var HelloWorld = Backbone.Marionette.View.extend({
  el: '#app',
  template: _.template('<h1><%- _1NOMINATE %></h1><p><%- _1NOMINATE_DESC %></p><button class="btn-login"><%- _1NOMINATE_BTN %></button>'),

  templateContext: _.pick(textStrings, "_1NOMINATE", "_1NOMINATE_DESC", "_1NOMINATE_BTN"),

  events: {
      'click .btn-login': 'login'
    },

   login: function () {
      console.log ("log in button fired");
      FB.login(function(response) {
        if (response.status === 'connected') {
          console.log ("logged in");
        } else {
          console.log ("The person is not logged into this app or we are unable to tell.");
        }
      });
    }
});


