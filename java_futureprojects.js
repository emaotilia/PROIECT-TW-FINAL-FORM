var countDownDate = new Date("June 29, 2020 19:00:00").getTime();
var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "+ minutes + "m " + seconds + "s ";
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "IT'S OUT NOW";
  }
}, 1000);

function myFunction() {
  var elmnt = document.getElementById("p2");
  elmnt.remove();
}
document.getElementById("p1").style.color = "rgb(157, 33, 173)";
document.getElementById("p1").style.fontFamily = "Arial";
document.getElementById("p1").style.fontSize = "larger";
function myFunction2() {
  document.getElementsByTagName("H1")[0].setAttribute("class", "democlass");
}