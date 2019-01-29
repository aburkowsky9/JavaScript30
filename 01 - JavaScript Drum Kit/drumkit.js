const allDrums = Array.from(document.getElementsByClassName('key'));

document.addEventListener('keydown', (e) => {
  const keyCode = e.keyCode.toString();
  const drum = allDrums.filter((div) => div.attributes[0].value === keyCode);
  if (drum.length > 0) {
    manipulateClass(drum[0]);
  }
});

const manipulateClass = function(drum) {
  drum.classList.add('playing');
  playSound(drum);
  setTimeout(0, () => {
    drum.classList.remove('playing');
  });
}

const playSound = function(drum) {
  const audioType = drum.querySelector('.sound').innerHTML;
  const audio = new Audio(`./sounds/${audioType}.wav`);
  audio.play();
}

// do not select a drum if not returned by filter
// seperate out function into drum selection and sound playing