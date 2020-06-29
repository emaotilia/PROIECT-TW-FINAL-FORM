
document.getElementById("p1").style.color = "rgb(157, 33, 173)";
document.getElementById("p1").style.fontFamily = "Arial";
document.getElementById("p1").style.fontSize = "larger";
function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  // add a zero in front of numbers<10
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById("txt").innerHTML = h + ":" + m + ":" + s;
  var t = setTimeout(function () { startTime() }, 500);
}

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}


function Afiseaza_date() {
  if (localStorage.getItem('userData') != null) {
    var newDate = new Date(localStorage.getItem('userData'));
    const getDaysInMonth = date =>
      new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

    let today = new Date();
    var year = today.getFullYear() - newDate.getFullYear();
    if (year < 10)
      var months = 0;
    var days = 0;

    if (today.getMonth() < newDate.getMonth()) {
      year--;

      months = (12 - newDate.getMonth() - 1) + today.getMonth() + 1;
    }
    else
      months = (today.getMonth() - newDate.getMonth());

    if (today.getDate() < newDate.getDate()) {
      var zile = getDaysInMonth(newDate);
      days = zile - (newDate.getDate() - today.getDate());
      months--;
    }
    else
      days = today.getDate() - newDate.getDate();

    var hours = today.getHours();
    var minutes = today.getMinutes();
    var seconds = today.getSeconds();


    var t = document.getElementById("age");
    t.textContent = "Your age : " + year + " years " + months + " months " +days + " days " + hours + " hours " + minutes + " minutes " + seconds + " seconds ";
    setInterval(() => {
      Afiseaza_date();
    }, 1000);

  }
}

function showAge(event) {
  var x = document.getElementById("data").value;
  if (x == "" || x == null) {
    alert("introdu data valida!");
  }
  else {
    var newData = new Date(x);

    localStorage.setItem('userData', newData);

    Afiseaza_date();
  }
}

var rgtClickContextMenu = document.getElementById('div-context-menu');

    
    document.onclick = function(e) {
      rgtClickContextMenu.style.display = 'none';
    }

    
    document.oncontextmenu = function(e) {
      var elmnt = e.target
      if (elmnt.className.startsWith("context-menu")) {
        e.preventDefault(); 
        rgtClickContextMenu.style.left = e.pageX + 'px'
        rgtClickContextMenu.style.top = e.pageY + 'px'
        rgtClickContextMenu.style.display = 'block'
        
       
      }
    }
 