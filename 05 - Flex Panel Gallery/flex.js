const panels = document.querySelectorAll('.panel');
panels.forEach((panel) => {
  panel.addEventListener('click', () => {
    if (panel.classList.contains('open')) {
      panel.classList.remove('open');
    } else {
      panel.classList.add('open');
    }
  });
  panel.addEventListener('transitionend', (event) => {
    if (event.propertyName === 'flex' || event.propertyName === 'flex-grow') {
      if (panel.classList.contains('follow-open')) {
        panel.classList.remove('follow-open');
      } else {
        panel.classList.add('follow-open');
      }
    }
  });
}); 