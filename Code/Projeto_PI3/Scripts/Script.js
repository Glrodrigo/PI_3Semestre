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

function onSignIn(googleUser){
  var profile = googleUser.getBasicProfile;
  startLogin();
}

var startLogin = function(){
  gapi.load('auth2', function(){
    auth2 = gapi.auth2.init(
      {
        client_id: 'client_id',
        cokkiepolicy: 'single_host_origin',
        scope: 'profile email'
      });
      auth2.attachClickHandler(document.getElementById('llogin'),{}, onSuccess, onFailure);
  });

  function onSuccess(googleUser){
        var profile = response.getBasicProfile();
        var userID = perfil.getId();
        var userName = perfil.getName();
        var userEmail = perfil.getEmail();
        var userPicture = perfil.getImageUrl();

  }

  function onFailure(error){
    console.log(error);
  }  
}