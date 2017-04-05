window._ = require('underscore'); // Backbone can't see it otherwise

var Backbone = require('backbone');

//add Backbone to global scope
//http://stackoverflow.com/questions/33019133/browserify-change-the-order-the-dependencies-are-loaded
global.Backbone = Backbone;

Backbone.$ = window.$; // Use the jQuery from the script tag
Backbone.Marionette = require('backbone.marionette');
