var Success = Backbone.Marionette.View.extend({
  el: '#app',
  template: '#success',
  templateContext: dictionary.pick("_4NOMINATE", "_4NOMINATE_DESC", "_4NOMINATE_BTN", "_4NOMINATE_BTN_2", "_4NOMINATE_BTN_3","_4NOMINATE_LINK"),

  events: {
        "click .inviteFriend": "onInviteFriend",
        "click .nominateAgain": "onNominateAgain",
        "click .tellYourFriends": "onTellFriends"
    },

    onInviteFriend: function(e) {
      FB.ui({
        method: 'send',
        link: 'https://www.facebook.com/groups/kuyouthnetwork/',
      });
    },

    onNominateAgain: function(e) {
       //how to render a cached view?
       //do we need to remove the nominated friend from the list or not?

       amnestyApp.Views.myFriends.render();
       console.log ("nominate again fired");
    },

    onTellFriends: function(e) {
      // var shareUrl = window.location.href;

      FB.ui({
        method: 'share',
        href: 'https://amnesty.org',
      }, function(response){});
    }

});
