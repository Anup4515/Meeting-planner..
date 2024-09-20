function show() {
  let date = new Date();
  let time = date.toLocaleTimeString(); 
  document.getElementById("current-time").innerHTML = time;
}

show(); 
setInterval(show, 1000); 
console.log("time");

