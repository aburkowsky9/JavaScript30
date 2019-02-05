const panels = document.querySelectorAll('.panel');
panels.forEach((panel) => {
  panel.addEventListener('click', () => {
    if (panel.classList.contains('open')) {
      panel.classList.remove('open');
      panel.childNodes[1].style.transform = 'translateY(-100%)';
      panel.childNodes[5].style.transform = 'translateY(100%)';
    } else {
      panel.classList.add('open');
      panel.childNodes[1].style.transform = 'translateY(50%)';
      panel.childNodes[5].style.transform = 'translateY(-50%)';
    }
  })
}); 