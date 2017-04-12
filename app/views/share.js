var Share = Backbone.Marionette.View.extend({
  el: '#app',
  template: '#share',
  templateContext: _.pick(textStrings, "_1NOMINATE", "_1NOMINATE_DESC", "_3NOMINATE_CALL", "_3NOMINATE_BTN")

});
