const playButton = document.getElementById("play-button");
const video = document.getElementById("video");

playButton.addEventListener("click", function() {
  if (video.paused == true) {
    video.play();

    playButton.innerHTML = "||";
  } else {
    video.pause();

    playButton.innerHTML = "►";
  }
});