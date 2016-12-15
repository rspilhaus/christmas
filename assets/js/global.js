// -----------------------------------------------------------------
//! Snowfall
// -----------------------------------------------------------------
 
//Inspired by code behind: http://codepen.io/GreenSock/pen/BjqLxq
var sizes = ["snowflake-sm", "snowflake-md", "snowflake-lg"],
    snowContainer = document.getElementById("hero"),
    startY = -32,
    endY = 650;

//build the timeline
var particles = new TimelineMax();

for (var i = 0; i < 30; i++) {
	var sizeIndex = randomNumber(0,2); //get random number between 0 and 2
	var size = sizes[sizeIndex]; //get random size - styles set in CSS
	var speed = (10 - (sizeIndex * 2)) //larger = faster
	var flake = $('<div class="snowflake ' + size + '"/>').appendTo(snowContainer); //create a snowflake
	particles.set(flake, {top:startY,left:'' + randomNumber(0, 100) + '%'}, 0) //position it initially at 1-100% x and -40 y
	
	// create an animation at a random start time
	particles.to(flake, speed, {y:endY, repeatDelay:Math.random()*2, repeat:-1}, Math.random() * 10)
}
  
function randomNumber(min, max){
	return Math.floor(Math.random() * (1 + max - min) + min);
}