(function (global) {
  var defaultLang = "en";
  var strings;
  var lang;

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

  setLang(getLangFromQueryString() || defaultLang);

  var dictionary = {
    getLang: function () {
      return lang;
    },

    pick: function () {
      var stringsKeys = arguments;
      var pickArguments = [strings].concat(stringsKeys);

      var pickedStrings = _.pick.apply(global, pickArguments);

      var pickedStringsForLang = _.mapObject(pickedStrings, function (translations, key) {
        var stringForCurrentLang = translations[lang] || "";

        return stringForCurrentLang;
      });

      return pickedStringsForLang;
    }
  };

  global.dictionary = dictionary;
})(window);
