var person = Backbone.Model.extend({
    defaults: {
      id: null,
      third_party_id: null,
      name: null,
      email: null,
      status: 0
    },

    login: function () {
      this._getuserdata = function (callback) {
        console.log('_getuserdata called;');
        /* Here you can assemble a query */
        FB.api('/me?fields=third_party_id,email,name', function (response) {
          if (!response || response.error) {
            callback(true, response.error);
          } else {
            console.log('"/me" query success where username is ' + response['name'] + '.', response);
            callback(null, response);
          }
        });

      };
    }

});
