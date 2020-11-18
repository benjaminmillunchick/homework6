var video = document.getElementById("myVideo");

window.addEventListener("load", function() {
	video = document.querySelector("#myVideo");
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play()
	span = document.getElementById("volume").innerHTML = (video.volume*100) + "%";
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	var curSpeed = video.playbackRate;
	video.playbackRate = curSpeed*.9;
	console.log("Current speed is:" + curSpeed);
});

document.querySelector("#faster").addEventListener("click", function() {
	var curSpeed = video.playbackRate;
	video.playbackRate = curSpeed/.9;
	console.log("Current speed is:" + curSpeed);
});

document.querySelector("#skip").addEventListener("click", function() {
	if(video.currentTime + 5 > video.duration){
		video.currentTime = 0;
	}
	else{
		video.currentTime += 5;
	}
	console.log("Current time of the video: " + video.currentTime);
	video.play();
});

document.querySelector("#mute").addEventListener("click", function() {
	if(video.muted == true){
		video.muted = false;
		document.getElementById("mute").innerHTML="Mute";
		console.log("Mute");
	}
	else{
		video.muted = true;
		document.getElementById("mute").innerHTML="Unmute";
		console.log("Unmute");
	}
});

document.querySelector("#volumeSlider").addEventListener("change", function() {
	video.volume = this.value / 100;
	console.log("Current Volume: " + video.volume);
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
});

document.querySelector("#old").addEventListener("click", function() {
	console.log("gratscale");
	video.classList.add("oldTime");
});  

document.querySelector("#original").addEventListener("click", function(){
	console.log("original");
	video.classList.remove("oldTime");
})