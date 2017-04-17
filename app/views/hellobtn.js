var HelloBtn = Backbone.Marionette.View.extend({
  template: '#hellobtn',

  templateContext: _.pick(textStrings, "_1NOMINATE_BTN"),

  events: {
      'click .btn-login': 'login'
    },

   login: function () {
      console.log ("log in button fired");
      var amnestyUser = new Person();
      amnestyUser.login();
    }
});
