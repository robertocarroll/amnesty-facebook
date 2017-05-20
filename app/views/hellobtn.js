var HelloBtn = Backbone.Marionette.View.extend({
  template: '#hellobtn',

  templateContext: dictionary.pick("_1NOMINATE_BTN"),

  events: {
      'click .btn-login': 'login'
    },

   login: function (e) {
      var button = e.currentTarget;
      var isEnabled = !button.disabled;

      if (isEnabled) {
        button.disabled = true;
        button.classList.toggle('is-loading');
      }

      var amnestyUser = new Person();
      amnestyUser.login();
    }
});
