const blurSlider = document.getElementById('blur');
const root = document.documentElement;
blurSlider.addEventListener('change', () => {
  console.log(blurSlider.value);
  root.style.setProperty('--blur', blurSlider.value + 'px');
})

blurSlider.addEventListener('mousemove', () => {
  console.log(blurSlider.value);
  root.style.setProperty('--blur', blurSlider.value + 'px');
})
