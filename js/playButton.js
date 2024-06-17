const playButton = document.querySelector("#play-button");
const video = document.querySelector("#video");

playButton.addEventListener("click", () => {
  if (video.paused == true) 
  {
    video.play();
    playButton.innerHTML = "||";
  } 
  else 
  {
    video.pause();
    playButton.innerHTML = "►";
  }
});