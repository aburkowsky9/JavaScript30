const playBtn = document.querySelector('.toggle');
const video = document.querySelector('video');
const progressBarFill = document.querySelector('.progress__filled');
const progressBar = document.querySelector('.progress');
const sliders = document.querySelectorAll('.player__slider');
const skipBtns = document.querySelectorAll('.skip');

let mouseDown = false;

playBtn.addEventListener('click', handlePlayToggle);
video.addEventListener('click', () => {
  handlePlayToggle.call(playBtn);
});
video.addEventListener('ended', handleVideoEnd);
video.addEventListener('timeupdate', syncProgressBar);
progressBar.addEventListener('mousedown', (e) => {
  mouseDown = true;
  handleProgressScrub(e);
});
document.addEventListener('mouseup', () => mouseDown = false);
progressBar.addEventListener('mousemove', handleProgressScrub);
sliders.forEach((slider) => {
  slider.addEventListener('change', handleSliderChange);
});
skipBtns.forEach((skip) => {
  skip.addEventListener('click', handleSkip);
});

// start video when click play button
function handlePlayToggle() {
  if (this.classList.toggle('on')) {
    this.textContent = '❚❚';
    video.play();
    //interval ID
    // progressInterval = setInterval(syncProgressBar, 300);
  } else {
    this.textContent = '►';
    video.pause();
    // clearInterval(progressInterval);
  }
}

function handleVideoEnd() {
  if (playBtn.classList.contains('on')) {
    handlePlayToggle.call(playBtn);
  }
  this.currentTime = 0;;
}

// rewind 10s and ff 25s buttons
function handleSkip() {
  const time = video.currentTime;
  const skipAmount = parseFloat(this.dataset.skip);
  if (time + skipAmount < 0 || time + skipAmount > video.duration) {
    video.currentTime = 0
  } else {
    video.currentTime = time + skipAmount;
  }
}

// sync progress bar with video
function syncProgressBar() {
  const fill = (video.currentTime / video.duration) * 100;
  progressBarFill.style.flexBasis = `${fill}%`;
}

function handleProgressScrub({ offsetX }) {
  if (!mouseDown) return;
  const ratio = offsetX / progressBar.offsetWidth;
  video.currentTime = video.duration * ratio;
}

//change volume slider or playback rate 
function handleSliderChange() {
  video[this.name] = this.value;
}