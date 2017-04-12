var Success = Backbone.Marionette.View.extend({
  el: '#app',
  template: '#success',
  templateContext: _.pick(textStrings, "_4NOMINATE", "_4NOMINATE_DESC", "_4NOMINATE_BTN", "_4NOMINATE_BTN_2"),

  events: {
        "click .nominateAgain": "onNominateAgain",
        "click .tellYourFriends": "onTellFriends"
    },

    onNominateAgain: function(e) {
       //how to render a cached view?
       //do we need to remove the nominated friend from the list or not?
    },

    onTellFriends: function(e) {

    }

});
