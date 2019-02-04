const root = document.documentElement;
const modifiers = document.querySelectorAll('.controls input');

function changeCSSValue() {
  const { name, value } = this;
  if (name === 'base') {
    root.style.setProperty(`--${name}`, value);
  } else {
    root.style.setProperty(`--${name}`, `${value}px`);
  }
}

modifiers.forEach((node) => {
  node.addEventListener('change', changeCSSValue);
  node.addEventListener('mousemove', changeCSSValue);
});

// const spacingSlider = document.getElementById('spacing');
// const blurSlider = document.getElementById('blur');
// const colorSelector = document.getElementById('base');

// spacingSlider.addEventListener('change', () => {
//   root.style.setProperty('--spacing', spacingSlider.value + 'px');
// });

// spacingSlider.addEventListener('mousemove', () => {
//   root.style.setProperty('--spacing', spacingSlider.value + 'px');
// });

// blurSlider.addEventListener('change', () => {
//   root.style.setProperty('--blur', blurSlider.value + 'px');
// });

// blurSlider.addEventListener('mousemove', () => {
//   root.style.setProperty('--blur', blurSlider.value + 'px');
// });

// colorSelector.addEventListener('change', () => {
//   root.style.setProperty('--base', colorSelector.value);
// });

// colorSelector.addEventListener('mousemove', () => {
//   root.style.setProperty('--base', colorSelector.value);
// });


