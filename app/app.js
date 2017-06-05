var $ = require('jquery')(window);
var _ = require('underscore');
var Backbone = require('backbone');
var Marionette = require('backbone.marionette');
Backbone.$ = $;
var Promise = require('es6-promise');
var dictionary = require('./dictionary.js');
var init = require('./init.js');

var amnestyApp = new Marionette.Application();
amnestyApp.Views = {};
amnestyApp.Models = {};


init.loadDictionary = dictionary.loadStrings("./data/dictionary.json");
Promise.all([
  init.loadFacebookApi,
  init.loadDictionary
]).then(function () {
  amnestyApp.start();
  console.log ("success");
}, function (errorDescription) {
  if (errorDescription === "error") {

    console.log ("error");
  }
  else if (errorDescription === "timeout") {


  }
});

module.exports = amnestyApp;


