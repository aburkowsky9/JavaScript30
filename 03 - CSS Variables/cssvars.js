const root = document.documentElement;
const modifiers = document.querySelectorAll('.controls input');

function changeCSSValue() {
  const { name, value, dataset } = this;
  const suffix = dataset.sizing || '';
  root.style.setProperty(`--${name}`, value + suffix);
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


