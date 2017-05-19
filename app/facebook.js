(function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));

  window.fbAsyncInit = function() {
    FB.init({
      appId       : '148573185670966',
      status      : true, // check login status
      cookies     : true, // enable cookies to allow server to access session,
      xfbml       : true,
      version     : 'v2.8'
    });
    FB.AppEvents.logPageView();
    amnestyApp.Views.hello.showChildView('facebookCallRegion', new HelloBtn());
    console.log ("Facebook loaded");
  };


