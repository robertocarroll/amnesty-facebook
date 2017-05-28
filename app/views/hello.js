var HelloWorld = Backbone.Marionette.View.extend({
  template: '#hello',

  templateContext() {
    return {
      _1NOMINATE: dictionary.pick("_1NOMINATE")["_1NOMINATE"],
      _1NOMINATE_DESC: dictionary.pick("_1NOMINATE_DESC")["_1NOMINATE_DESC"],
      _1NOMINATE_CALL: dictionary.pick("_1NOMINATE_CALL")["_1NOMINATE_CALL"],
      _1NOMINATE_LOADING: dictionary.pick("_1NOMINATE_LOADING")["_1NOMINATE_LOADING"]
    }
  },


  regions: {
    facebookCallRegion: {
      el: '#loadedFacebook',
      replaceElement: true
    },
    facebookErrorRegion: {
      el: '#errorFacebook',
      replaceElement: true
    }
  },

  modelEvents: {
    'change:loggedIn': 'handleLogin'
  },

  handleLogin() {
    var loggedInStatus = this.model.get('loggedIn');

    if (loggedInStatus == "true") {
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
    //show error message
    amnestyApp.Views.hello.showChildView('facebookErrorRegion', new HelloError());
    //show button to try again
    amnestyApp.Views.hello.showChildView('facebookCallRegion', new HelloBtn());
  },

  onRender: function() {

   if ('parentIFrame' in window) {
      parentIFrame.size();
    }
  }

});


