var HelloBtn = Backbone.Marionette.View.extend({
  el: '#app',
  template: '#hellobtn',

  templateContext: _.pick(textStrings, "_1NOMINATE_BTN"),


});
