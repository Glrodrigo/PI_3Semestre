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