var HelloBtn = Backbone.Marionette.View.extend({
  template: '#hellobtn',

  templateContext: dictionary.pick("_1NOMINATE_BTN"),

  events: {
      'click .btn-login': 'login'
    },

   login: function (ev) {
      var button = ev.currentTarget;
      var isEnabled = !button.disabled;

      if (isEnabled) {
        console.log ("btn enabled");
        button.disabled = true;
        button.classList.toggle('is-loading');
        console.log (button.classList);
      }

      var amnestyUser = new Person();
      amnestyUser.login();
    }
});
