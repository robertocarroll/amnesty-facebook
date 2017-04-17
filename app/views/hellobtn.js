var HelloBtn = Backbone.Marionette.View.extend({
  el: '#loadedFacebook',
  template: '#hellobtn',

  templateContext: _.pick(textStrings, "_1NOMINATE_BTN"),

  onRender: function() {
   console.log ("hello btn view rendered");
  },

  events: {
      'click .btn-login': 'login'
    },

   login: function () {
      console.log ("log in button fired");
      var amnestyUser = new Person();
      amnestyUser.login();
    }
});
