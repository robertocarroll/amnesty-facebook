var Success = Backbone.Marionette.View.extend({
  el: '#app',
  template: '#success',
  templateContext: dictionary.pick("_4NOMINATE", "_4NOMINATE_DESC", "_4NOMINATE_BTN_2","_4IFRAME"),

  events: {
        "click .nominateAgain": "onNominateAgain"
    },

    onNominateAgain: function(e) {
       amnestyApp.Views.myFriends.render();
    }
});
