document.write(Date());
function mainfunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
window.onload=function(){
document.getElementById("demo_main_1").onmouseover = function () { mouseOver() };
document.getElementById("demo_main_1").onmouseout = function () { mouseOut() };
}
function mouseOver() {
  document.getElementById("demo_main_1").style.color = "magenta";
}

function mouseOut() {
  document.getElementById("demo_main_1").style.color = "black";
}

x = 100  
y = 50   
r = 50   
a = 0    

function rotate(a) {
  
  var px = x + r * Math.cos(a); 
  var py = y + r * Math.sin(a);
  
  document.querySelector('#point').style.left = px + "px";
  document.querySelector('#point').style.top = py + "px";  
}



function lista()
{
	var lista = document.getElementById("lista");
	var list = document.getElementsByTagName("li");

	for(var i = list.length - 10; i >=0; i--) 
  	lista.appendChild(list[i]);

}


setInterval(function() {
  a = (a + Math.PI / 360) % (Math.PI * 2);
  rotate(a);
}, 5);

var facts = ['Although hamsters are relatively healthy creatures, annual veterinary visits are recommended.','Hamsters are solitary animals who should be housed singly in their habitat.','Hamsters use their front and back paws like humans use their hands, mainly to grip their food and toys.']

function newFact() {
  var randomNumber = Math.floor(Math.random() * (facts.length));
  document.getElementById('factDisplay').innerHTML = facts[randomNumber];
}



