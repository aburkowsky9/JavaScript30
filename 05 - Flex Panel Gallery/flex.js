function togglePanelOpen() {
  handleClassList('open', this);
}

function toggleTextTransition({ propertyName }) {
  if (propertyName === 'flex' || propertyName === 'flex-grow') {
    handleClassList('follow-open', this);
  }
}

function handleClassList(className, node) {
  if (node.classList.contains(className)) {
    node.classList.remove(className);
  } else {
    node.classList.add(className);
  }
}

(function() {
  const panels = document.querySelectorAll('.panel');
  
  panels.forEach((panel) => {
    panel.addEventListener('click', togglePanelOpen);
    panel.addEventListener('transitionend', toggleTextTransition);
  }); 
})();