var Share = Backbone.Marionette.View.extend({
  el: '#app',
  template: '#share',
  templateContext: dictionary.pick("_1NOMINATE", "_1NOMINATE_DESC", "_3NOMINATE_CALL", "_3NOMINATE_BTN_2"),

  events: {
        "click .shareForm": "onSubmit"
    },

    onSubmit: function(e) {
        e.preventDefault();
        var amnestyMessage = $("textarea").val();
        var amnestyUserID = this.model.id;
        var facebookPost = {
          "message": amnestyMessage,
          "tags": amnestyUserID
        };

        amnestyApp.postToFacebook(facebookPost);
    }
  });
