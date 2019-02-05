function togglePanelOpen() {
  handleClassList('open', this);
}

function toggleTextTransition({ propertyName }) {
  if (propertyName === 'flex' || propertyName === 'flex-grow') {
    handleClassList('follow-open', this);
  }
}

function handleClassList(className, node) {
  node.classList.toggle(className);
}

(function() {
  const panels = document.querySelectorAll('.panel');
  
  panels.forEach((panel) => {
    panel.addEventListener('click', togglePanelOpen);
    panel.addEventListener('transitionend', toggleTextTransition);
  }); 
})();