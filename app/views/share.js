var Share = Backbone.Marionette.View.extend({
  template: '#share',
  templateContext: dictionary.pick("_1NOMINATE", "_1NOMINATE_DESC", "_3NOMINATE_CALL", "_3NOMINATE_BTN_2", "_3NOMINATE_LINK", "_3NOMINATE_WRAPPER"),

  regions: {
    shareErrorRegion: {
      el: '#errorShare',
      replaceElement: true
    }
  },

  events: {
        "click .shareForm": "onSubmit"
  },

    onSubmit: function(e) {
        e.preventDefault();
        var amnestyMessage = $("textarea").val();
        var amnestyUserID = this.model.id;
        var amnestyUserName = this.model.attributes.name;
        var amnestyLink = dictionary.pick("_3NOMINATE_LINK");
        amnestyLink = amnestyLink["_3NOMINATE_LINK"];
        var amnestyWrapper = dictionary.pick("_3NOMINATE_WRAPPER");
        amnestyWrapper = amnestyWrapper["_3NOMINATE_WRAPPER"];

        amnestyMessage = amnestyUserName + amnestyWrapper + amnestyMessage;
        var facebookPost = {
          "message": amnestyMessage,
          "tags": amnestyUserID,
          "link": amnestyLink
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
              amnestyApp.Views.success = new Success();
              amnestyApp.mainRegion.empty();
              amnestyApp.mainRegion.show (amnestyApp.Views.success);
            }
            else{
              // show an error message
              // show them the actual error
              console.log(response.error);

              //let them try again

              //put the message in the text field
              if ($('#comment').is(':empty')) {
                  $('#comment').val(amnestyMessage);
              }


            }
          }
      );
    }
  });
