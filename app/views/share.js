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

        this.postToFacebook(facebookPost);
    },

    postToFacebook: function(facebookPost) {
 /*     {
              "message": "This is a test message",
              "tags": "user id of tagged friend",
              "place": "Page ID of a location associated with this post."
          }
*/    console.log("posting to Facebook " + JSON.stringify(facebookPost));
      FB.api(
          "/me/feed",
          "POST",
          facebookPost,
          function (response) {
            if (response && !response.error) {
              console.log ('Success - Post ID: ' + response.id);
              var success = new Success();
              success.render();
            }
            else{
              console.log(response.error);
            }
          }
      );
    }
  });
