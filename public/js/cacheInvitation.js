
// Returns a random number between min (inclusive) and max (exclusive)
function guestRandom(min, max) {
  return Math.random() * (max - min) + min;
}
//localstorage
if(!localStorage.getItem("guest")){
	// setter
	localStorage.setItem("guest", guestRandom(1,999999999));
	// getter
	var guest = localStorage.getItem("guest");
} 

document.getElementById('cache').innerHTML = localStorage.getItem("guest");
document.getElementById('listIdLoad').innerHTML = window.location.href.split("/").pop();

