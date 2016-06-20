var intervalID = window.setInterval(clock, 1);

function clock() {
  var timestamp = new Date();
  var hour = timestamp.getHours();
  var min  = timestamp.getMinutes();
  var sec  = timestamp.getSeconds();
  var ampm  = "AM"
  if(hour > 12) {
    hour -= 12
    ampm = "PM"
  }
  if(hour < 10) {
    hour = "0" + hour
  }
  if(min < 10) {
    min = "0" + min
  }
  if(sec < 10) {
    sec = "0" + sec
  }

  document.getElementById("sec").innerText = sec
  document.getElementById("min").innerText = min
  document.getElementById("hour").innerText = hour
  document.getElementById("ampm").innerText = ampm
}

var intervalID = window.setInterval(changeBg, 1000);

function changeBg() {
  var timestamp = new Date();
  var min  = timestamp.getMinutes();
  var sec  = timestamp.getSeconds();
  if( (min % 2 != 0) && (sec == 0) && (min % 5 != 0) ) {
    document.getElementById("background").style.backgroundColor = "black";
  }
  if( (min % 2 == 0) && (sec == 0) && (min % 5 != 0) ) {
    document.getElementById("background").style.backgroundColor = "blue";
  }
  if( (min % 5 == 0) && (sec == 0) ) {
    document.getElementById("background").style.backgroundColor = randomColor();
  }
}

var intervalID = window.setInterval(changeText, 1000);

function changeText() {
  var timestamp = new Date();
  var min  = timestamp.getMinutes();
  if( (min == 0) && (sec == 0) ) {
    document.getElementById("clock").style.color = randomColor();
  }
}

function randomColor() {
  return 'rgb(' + (Math.floor(Math.random() * 256)) +
         ',' + (Math.floor(Math.random() * 256)) +
         ',' + (Math.floor(Math.random() * 256)) +
         ')';  
}