var video = document.getElementById("myVideo");
var volume = 100;
var slider = document.getElementById("volumeSlider");
var output = document.getElementById("volume");
output.innerHTML = slider.value;

window.addEventListener("load", function() {
	video = document.querySelector("#myVideo");
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play()
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	var curSpeed = video.playbackRate;
	video.playbackRate -= .1;
	console.log("Current speed is:" + curSpeed);
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Faster Video");
	video.playbackRate += .1;
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip Video");
	video.currentTime += 5;
});

document.querySelector("#mute").addEventListener("click", function() {
	console.log("Mute Video");
	video.volume = 0;
	slider.value = 0;
	output.innerHTML = 0;
});

slider.oninput = function() {
	output.innerHTML = this.value;
	video.volume = this.value / 100;
  }

document.querySelector("#old").addEventListener("click", function() {
	console.log("gratscale");
	video.classList.add("oldTime");
});  

document.querySelector("#original").addEventListener("click", function(){
	console.log("original");
	video.classList.remove("oldTime");
})