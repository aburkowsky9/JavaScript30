document.addEventListener('keydown', (e) => {
  const keyCode = e.keyCode;
  // const drum = allDrums.filter((div) => div.attributes[0].value === keyCode);
  const drum = document.querySelector(`div[data-key='${keyCode}']`);
  if (drum) {
    addClass(drum, keyCode);
  }
});

const addClass = function(drum, dataKey) {
  drum.classList.add('playing');
  playSound(dataKey);
}

const playSound = function(dataKey) {
  const audio =  document.querySelector(`audio[data-key='${dataKey}']`);
  audio.currentTime = 0;
  audio.play();
}

const removeClass = function(drumTransEvent) {
  if (drumTransEvent.propertyName === 'transform') {
    console.log('here');
    drumTransEvent.target.classList.remove('playing');
  }
}

const allDrums = Array.from(document.getElementsByClassName('key'));
allDrums.forEach(drum => drum.addEventListener('transitionend', removeClass));
