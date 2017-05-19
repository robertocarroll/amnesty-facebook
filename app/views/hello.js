var HelloWorld = Backbone.Marionette.View.extend({
  template: '#hello',
  templateContext: dictionary.pick("_1NOMINATE", "_1NOMINATE_DESC", "_1NOMINATE_CALL", "_1NOMINATE_BTN", "_1NOMINATE_LOADING"),

  regions: {
    facebookCallRegion: {
      el: '#loadedFacebook',
      replaceElement: true
    }
  },

  modelEvents: {
    'change:loggedIn': 'handleLogin'
  },

  handleLogin() {
    var loggedInStatus = this.model.get('loggedIn');
    if (loggedInStatus) {
      this.getFriends();
    }

    else {
      this.loginFailed();
    }
  },

  getFriends() {
    var token = this.model.get('token');
    amnestyApp.Views.myFriends = new FriendsView ({
       token: token
    });
  },

  loginFailed() {

  }
});


