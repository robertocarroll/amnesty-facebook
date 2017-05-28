var Success = Backbone.Marionette.View.extend({
  template: '#success',
  templateContext: dictionary.pick("_4NOMINATE", "_4NOMINATE_DESC", "_4NOMINATE_BTN_2","_4IFRAME"),

  templateContext() {
    return {
      _4NOMINATE: dictionary.pick("_4NOMINATE")["_4NOMINATE"],
      _4NOMINATE_DESC: dictionary.pick("_4NOMINATE_DESC")["_4NOMINATE_DESC"],
      _4NOMINATE_BTN_2: dictionary.pick("_4NOMINATE_BTN_2")["_4NOMINATE_BTN_2"],
      _4IFRAME: dictionary.pick("_4IFRAME")["_4IFRAME"]
    }
  },

  events: {
        "click .nominateAgain": "onNominateAgain"
    },

    onNominateAgain: function(e) {
      var button = e.currentTarget;
      var isEnabled = !button.disabled;

      if (isEnabled) {
        button.disabled = true;
        button.classList.toggle('is-loading');
      }

       amnestyApp.Views.myFriends.render();
    }
});
