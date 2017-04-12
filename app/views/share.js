var Share = Backbone.Marionette.View.extend({
  el: '#app',
  template: '#share',
  templateContext: _.pick(textStrings, "_1NOMINATE", "_1NOMINATE_DESC", "_3NOMINATE_CALL", "_3NOMINATE_BTN_2"),

  events: {
        "click .shareForm": "onSubmit"
    },

    onSubmit: function(e) {
        e.preventDefault();
        var amnestyMessage = $("textarea").val();
        console.log(amnestyMessage);

        var facebookPost = {
          "message": amnestyMessage,
          "tags": "user id of tagged friend",
          "place": "Page ID of a location associated with this post."
        };

        amnestyApp.postToFacebook(facebookPost);
    }
  });
