var HelloBtn = Backbone.Marionette.View.extend({
  template: '#hellobtn',

  templateContext: dictionary.pick("_1NOMINATE_BTN"),

  events: {
      'click .btn-login': 'login'
    },

   login: function () {
      var amnestyUser = new Person();
      amnestyUser.login();
    }
});
