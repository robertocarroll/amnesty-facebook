(function (global) {
  var defaultLang = "en";
  var strings = {
    "_BACKGROUND" : {
      "en": "464656512-web.jpg",
      "es": "test.png"
    },
    "_1NOMINATE" : {
      "en": "Nominate",
      "es": "ES_Nominate"
    },
    "_1NOMINATE_DESC" : {
      "en": "Experienced BRAVE? Celebrate BRAVE people in your life.",
      "es": "ES_Experienced BRAVE? Celebrate BRAVE people in your life."
    },
    "_1NOMINATE_LOADING" : {
      "en":"Loading Facebook",
      "es":"ES_Loading Facebook"
    },
    "_1NOMINATE_CALL" : {
      "en":"Log in to nominate them now.",
      "es":"ES_Log in to nominate them now."
    },
    "_1NOMINATE_ERROR" : {
      "en":"We can't seem to access Facebook right now. Please try again.",
      "es":"ES_We can't seem to access Facebook right now. Please try again."
    },
    "_1NOMINATE_BTN" : {
      "en":"Nominate with Facebook",
      "es":"ES_Nominate with Facebook"
    },
    "_2NOMINATE_BTN" : {
      "en":"Back",
      "es":"ES_Back"
    },
    "_2NOMINATE_CALL" : {
      "en":"Select your BRAVE Facebook friend",
      "es":"ES_Select your BRAVE Facebook friend"
    },
    "_2NOMINATE_NONE" : {
      "en":"You don't seem to have any Facebook friends",
      "es":"ES_You don't seem to have any Facebook friends"
    },
    "_2NOMINATE_ERROR" : {
      "en":"Something went wrong. Please try again",
      "es":"ES_Something went wrong. Please try again"
    },
    "_3NOMINATE_CALL" : {
      "en":"Share why you think they're BRAVE",
      "es":"ES_Share why you think they're BRAVE"
    },
    "_3NOMINATE_BTN" : {
      "en":"Back",
      "es":"ES_Back"
    },
    "_3NOMINATE_BTN_2" : {
      "en":"Submit",
      "es":"ES_Submit"
    },
    "_3NOMINATE_WRAPPER" : {
      "en":" is a Human Rights Defender. Here's why: \n\n",
      "es":" is a Human Rights Defender. Here's why ES: \n\n"
    },
    "_3NOMINATE_LINK" : {
      "en":"https://www.amnesty.org/en/",
      "es":"https://www.amnesty.org/es/"
    },
    "_4NOMINATE" : {
      "en":"Nominated",
      "es":"ES_Nominated"
    },
    "_4NOMINATE_DESC" : {
      "en":"Thanks for sharing BRAVE! Nominate another friend or tell your friends.",
      "es":"ES_Thanks for sharing BRAVE! Nominate another friend or tell your friends."
    },
    "_4NOMINATE_BTN_2" : {
      "en":"Nominate another person",
      "es":"ES_Nominate another person"
    },
    "_4IFRAME" : {
      "en":"https://www.amnesty.org/en/",
      "es":"https://www.amnesty.org/es/"
    }
  };


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
