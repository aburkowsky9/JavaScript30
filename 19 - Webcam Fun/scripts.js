const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');

function startVideo() {
  navigator.mediaDevices.getUserMedia({ audio: false, video: true })
    .then(stream => {
      video.srcObject = stream;
      video.onloadedmetadata = () => {
        video.play();
      }
    }).catch(err => console.log(err));
}

function paintToCanvas() {
  const { videoWidth, videoHeight } = this;
  canvas.width = videoWidth;
  canvas.height = videoHeight;
  return setInterval(() => ctx.drawImage(this, 0, 0, videoWidth, videoHeight), 16);
}

function takePhoto() {
  snap.currentTime = 0;
  snap.play();
  const url = canvas.toDataURL('image/jpeg');
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', 'Snapshot');
  // could use innerHTML here
  const img = document.createElement('img');
  img.src = url;
  img.alt = 'snapshot';
  link.appendChild(img);

  // strip.prepend(link); // not fully supported
  strip.insertBefore(link, strip.firstChild);
}

document.addEventListener('DOMContentLoaded', startVideo);
video.addEventListener('canplay', paintToCanvas);