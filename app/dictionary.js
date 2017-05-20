(function (global) {
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

  var dictionary = {
    getLang: function () {
      return lang;
    },

    pick: function () {
      console.log("Picking!");

      var pickedStringsForLang;

      if (strings === undefined) {
        console.log("No strings yet :(");
        pickedStringsForLang = undefined;
      }
      else {
        var stringsKeys = arguments;
        console.log("These:");
        console.log(arguments);
        var pickArguments = [strings].concat(stringsKeys);

        var pickedStrings = _.pick.apply(global, pickArguments);

        pickedStringsForLang = _.mapObject(pickedStrings, function (translations, key) {
          var stringForCurrentLang = translations[lang] || "";

          return stringForCurrentLang;
        });
      }

      return pickedStringsForLang;
    },

    loadStrings: function (stringsUrl) {
      // Only load strings once.
      if (!loadStringsPromise) {
        loadStringsPromise = new Promise(function (resolve, reject) {
          $.getJSON(stringsUrl, function(json) {// TODO: handle errors
            strings = json;
            setLang(getLangFromQueryString() || defaultLang);

            console.log("Strings loaded!");
            resolve();
          });
        });
      }

      return loadStringsPromise;
    }
  };

  global.dictionary = dictionary;
})(window);
