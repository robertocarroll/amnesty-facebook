var HelloWorld = Backbone.Marionette.View.extend({
  el: '#app',
  template: '#hello',

  templateContext: dictionary.pick("_1NOMINATE", "_1NOMINATE_DESC", "_1NOMINATE_CALL", "_1NOMINATE_BTN", "_1NOMINATE_LOADING"),

  regions: {
    facebookCallRegion: {
      el: '#loadedFacebook',
      replaceElement: true
    }
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


