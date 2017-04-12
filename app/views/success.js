var Success = Backbone.Marionette.View.extend({
  el: '#app',
  template: '#success',
  templateContext: _.pick(textStrings, "_4NOMINATE", "_4NOMINATE_DESC", "_4NOMINATE_BTN", "_4NOMINATE_BTN_2")

});
