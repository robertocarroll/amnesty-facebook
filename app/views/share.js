var Marionette = require('backbone.marionette');
var Success = require('./views/success.js');
var ShareError = require('./views/successerror.js');
var tpl = require('./share.hbs');

module.exports = Marionette.View.extend({
  template: tpl,

  templateContext: function () {
    return {
      _1NOMINATE: dictionary.pick("_1NOMINATE")["_1NOMINATE"],
      _1NOMINATE_DESC: dictionary.pick("_1NOMINATE_DESC")["_1NOMINATE_DESC"],
      _3NOMINATE_CALL: dictionary.pick("_3NOMINATE_CALL")["_3NOMINATE_CALL"],
      _3NOMINATE_BTN_2: dictionary.pick("_3NOMINATE_BTN_2")["_3NOMINATE_BTN_2"],
      _3NOMINATE_LINK: dictionary.pick("_3NOMINATE_LINK")["_3NOMINATE_LINK"],
      _3NOMINATE_WRAPPER: dictionary.pick("_3NOMINATE_WRAPPER")["_3NOMINATE_WRAPPER"]
    }
  },

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
        var button = e.currentTarget;
        var isEnabled = !button.disabled;

        if (isEnabled) {
          button.disabled = true;
          button.classList.toggle('is-loading');
        }

        var amnestyPageID = "111658128847068";
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
          "link": amnestyLink,
          "place": amnestyPageID
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
              if (response.error.type === "OAuthException") {
                errorMessage = "You are no longer logged into Facebook. Please log into Facebook and try again.";
              }
              else {
                errorMessage = "Please refresh the page and try again.";
              }
              amnestyApp.Views.share.showChildView('shareErrorRegion', new ShareError({errorMessage:errorMessage}));

              //put the message in the text field
              if ($('#comment').is(':empty')) {
                  $('#comment').val(facebookPost.message);
              }
            }
          }
      );
    }
  });
