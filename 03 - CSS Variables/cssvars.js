const root = document.documentElement;
const modifiers = document.querySelectorAll('.controls input');

function changeCSSValue(varName, varValue) {
  if (varName === 'base') {
    root.style.setProperty(`--${varName}`, varValue);
  } else {
    root.style.setProperty(`--${varName}`, `${varValue}px`);
  }
}

modifiers.forEach((node) => {
  node.addEventListener('change', () => {
    changeCSSValue(node.id, node.value);
  });
  node.addEventListener('mousemove', () => {
    changeCSSValue(node.id, node.value);
  });
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


