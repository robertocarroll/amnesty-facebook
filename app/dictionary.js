var $ = require('jquery')(window);
var _ = require('underscore');
var Backbone = require('backbone');
var Marionette = require('backbone.marionette');
Backbone.$ = $;
var Promise = require('es6-promise').Promise;

module.exports = (function () {
  var defaultLang = "en";
  var lang;
  var strings;
  var loadStringsPromise;

  function getLangFromQueryString () {
    // Mostly shamelessly cribbed from here: http://stackoverflow.com/a/901144/20578
    var langInQueryString;
    var regex = new RegExp("[?&]" + "lang" + "(=([^&#]*)|&|#|$)");
    var results = regex.exec(window.location.href);

    if (results && results[2]) {
      langInQueryString = decodeURIComponent(results[2].replace(/\+/g, " "));
    }

    return langInQueryString;
  }

  function setLang (languageCode) {
    // If this dictionary has at least one text string for the supplied language code, set its language to that code and return true. Otherwise, return false.
    for (var key in strings) {
      if ( strings.hasOwnProperty(key) && strings[key].hasOwnProperty(languageCode) ) {
        lang = languageCode;
        break;
      }
    }

    if (lang === undefined) {
      lang = defaultLang;
    }
  }

  return {
    getLang: function () {
      return lang;
    },

    pick: function () {
      var stringsKeys = arguments;
      var pickArguments = [strings].concat(stringsKeys);

      var pickedStrings = _.pick.apply({}, pickArguments);

      var pickedStringsForLang = _.mapObject(pickedStrings, function (translations, key) {
        var stringForCurrentLang = translations[lang] || "";

        return stringForCurrentLang;
      });

      return pickedStringsForLang;
    },

    loadStrings: function (stringsUrl) {
      if (loadStringsPromise === undefined) {
        loadStringsPromise = new Promise(function (resolve, reject) {
          $.ajax({
            dataType: "json",
            url: stringsUrl,
            async: true,
            success: function (json) {

              strings = json;
              setLang(getLangFromQueryString() || defaultLang);

              resolve();
            },
            error: function (jqXHR, textStatus, errorThrown) {
              reject(textStatus);// TODO: do we need any other error handling here?
            }
          });
        });
      }

      return loadStringsPromise;
    }
  };
})();
