var PickFriends = Backbone.Marionette.View.extend({
  el: '#app',
  template: '#friendsList',

  templateContext: _.pick(textStrings, "_1NOMINATE", "_1NOMINATE_DESC", "_2NOMINATE_BTN","_2NOMINATE_CALL"),

});
