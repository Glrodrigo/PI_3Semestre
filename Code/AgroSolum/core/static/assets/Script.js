var string = "AgroSolum_";
var array = string.split("");
var timer;

function frameLooper () {
  if (array.length > 0) {
    document.getElementById("name").innerHTML += array.shift();
  } else {
    clearTimeout(timer);
      }
  loopTimer = setTimeout('frameLooper()',150);

}
frameLooper();

var startApp = function() {
  gapi.load('auth2', function(){
    auth2 = gapi.auth2.init({
      client_id: 'client',
      cookiepolicy: 'single_host_origin',
      scope: 'profile email'
    });
    auth2.attachClickHandler(document.getElementById('login'), {}, onSuccess, onFailure);
  });
};

function onSuccess(googleUser) {
    var profile = googleUser.getBasicProfile();

    var id_token = googleUser.getAuthResponse().id_token;
    console.log("ID Token: " + id_token);
}

function onFailure(error) {
    console.log(error);
}