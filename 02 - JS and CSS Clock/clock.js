//transform-origin: right
// transform: rotate(deg)

// 360deg in clock
// second-hand: 360/60 = 6deg/1000
// minute-hand: 6deg/60sec = 0.1deg/1000
// hour-hand: 30deg/360sec = 0.125deg/1.5sec

// use setInterval to call transform function every 1000ms
const SECOND_HAND = document.querySelector('.second-hand');
const MIN_HAND = document.querySelector('.min-hand');
const HOUR_HAND = document.querySelector('.hour-hand');

(function() { //set inital time - seperated out for performance
  const now = new Date();
  const second = now.getSeconds();
  const min = now.getMinutes();
  const hour = now.getHours();

  const secondDegs = (second / 60) * 360 + 90;
  const minDegs = (min / 60) * 360 + 90;
  const hourDegs = (hour / 12) * 360 + 90;

  SECOND_HAND.style.transition = 'all 0.05s cubic-bezier(0.1, 2.95, 0.58, 1)';
  SECOND_HAND.style.transform = `rotate(${secondDegs}deg)`;
  MIN_HAND.style.transform = `rotate(${minDegs}deg)`;
  HOUR_HAND.style.transform = `rotate(${hourDegs}deg)`;
})();

function setTimeSubsequent() {
  const now = new Date();
  const second = now.getSeconds();
  const min = now.getMinutes();
  const hour = now.getHours();

  const secondDegs = (second / 60) * 360 + 90;
  const minDegs = (min / 60) * 360 + 90;
  const hourDegs = (hour / 12) * 360 + 90;

  if (second === 1) { // re-add transition for second hand at 1 sec to prevent odd tick transition at 0 sec.
    SECOND_HAND.style.transition = 'all 0.05s cubic-bezier(0.1, 2.95, 0.58, 1)';
    MIN_HAND.style.transition = null;
    HOUR_HAND.style.transition = null;
  } else if (second === 0) { // update min and hour only if second hand at 0
    SECOND_HAND.style.transition = null;
    MIN_HAND.style.transition = 'all 0.05s cubic-bezier(0.1, 2.95, 0.58, 1)';
    MIN_HAND.style.transform = `rotate(${minDegs}deg)`;
    
    HOUR_HAND.style.transition = 'all 0.05s cubic-bezier(0.1, 2.95, 0.58, 1)'; 
    HOUR_HAND.style.transform = `rotate(${hourDegs}deg)`;
  }

  SECOND_HAND.style.transform = `rotate(${secondDegs}deg)`;
}

setInterval(setTimeSubsequent, 1000);

