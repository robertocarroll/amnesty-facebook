var Success = Backbone.Marionette.View.extend({
  template: '#success',
  templateContext: dictionary.pick("_4NOMINATE", "_4NOMINATE_DESC", "_4NOMINATE_BTN_2","_4IFRAME"),

  onRender: function() {
    //amnestyApp.Views.share.destroy();
    console.log(amnestyApp.Views.share.isDestroyed());
  },

  events: {
        "click .nominateAgain": "onNominateAgain"
    },

    onNominateAgain: function(e) {
       amnestyApp.Views.myFriends.render();
    }
});
