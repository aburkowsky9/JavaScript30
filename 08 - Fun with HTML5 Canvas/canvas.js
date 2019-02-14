const canvas = document.getElementById('draw');
const ctx = canvas.getContext('2d');
let origW;
let origH;

function render() {
  origW = canvas.width = window.innerWidth-50;
  origH = canvas.height = window.innerHeight-50;
}

function redraw() {
  const data = canvas.toDataURL();
  // change canvas dimensions by scale
  canvas.width *= (window.innerWidth-50)/origW;
  canvas.height *= (window.innerHeight-50)/origH;
  //reset original height and width;
  origW = canvas.width;
  origH = canvas.height;
  const img = new Image();
  img.onload = function(){
      ctx.drawImage(img,0,0,img.width,img.height,0,0,canvas.width,canvas.height);
  }
  img.src = data;
}

document.addEventListener("DOMContentLoaded", render);
window.addEventListener('resize', redraw);

let hue = 0;
let width = 20;
let isDrawing = false;
let lastX = lastY = 0;

function draw({ clientX, clientY }) {
  if (!isDrawing) return;
  // need beginPath to unlink mousemove event triggered draws
  ctx.beginPath(); 
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  ctx.lineWidth = width;
  ctx.lineJoin = 'round';
  ctx.lineCap = 'round';
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(clientX, clientY);
  ctx.stroke();
  [lastX, lastY] = [clientX, clientY];
  hue++;
  if (hue > 360) {
    hue = 0;
  }
  width++;
  if (width > 100) {
    width = 20;
  }
}

canvas.addEventListener('mousedown', (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.clientX, e.clientY];
});
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);
canvas.addEventListener('mousemove', draw);

