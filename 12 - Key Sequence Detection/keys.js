window.addEventListener('keydown', handleKeyPress);
const pressed = [];
let secretCode = 'alex'
function handleKeyPress({ key }) {
  pressed.push(key);
  pressed.splice(0, pressed.length-secretCode.length);
  console.log(pressed);
  if (pressed.join('').includes(secretCode)) {
    console.log('yes');
    cornify_add();
  }
}