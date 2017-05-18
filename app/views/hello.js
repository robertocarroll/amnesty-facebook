var HelloWorld = Backbone.Marionette.View.extend({
  template: '#hello',
  templateContext: dictionary.pick("_1NOMINATE", "_1NOMINATE_DESC", "_1NOMINATE_CALL", "_1NOMINATE_BTN", "_1NOMINATE_LOADING"),

  regions: {
    facebookCallRegion: {
      el: '#loadedFacebook',
      replaceElement: true
    }
  }
});


