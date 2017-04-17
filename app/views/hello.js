var HelloWorld = Backbone.Marionette.View.extend({
  el: '#app',
  template: '#hello',

  templateContext: _.pick(textStrings, "_1NOMINATE", "_1NOMINATE_DESC", "_1NOMINATE_CALL", "_1NOMINATE_BTN", "_1NOMINATE_LOADING"),

  events: {
      'click .btn-login': 'login'
    },

   login: function () {
      console.log ("log in button fired");
      var amnestyUser = new Person();
      amnestyUser.login();
    }
});


