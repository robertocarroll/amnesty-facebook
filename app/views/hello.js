var Marionette = require('backbone.marionette');
var _ = require('underscore');
var dictionary = require('../dictionary.js');
var iframeResizer = require('iframe-resizer');
var HelloBtn = require('./hellobtn.js');
var HelloError = require('./helloerror.js');
var FriendsView = require('./friends.js');
var tpl = require('./hello.hbs');

module.exports = Marionette.View.extend({
  template: tpl,

  templateContext: function () {
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

  handleLogin: function () {
    var loggedInStatus = this.model.get('loggedIn');

    if (loggedInStatus == "true") {
      this.getFriends();
    }

    else {
      this.loginFailed();
    }
  },

  getFriends: function () {
    var token = this.model.get('token');
    amnestyApp.Views.myFriends = new FriendsView ({
       token: token
    });
  },

  loginFailed: function () {
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


