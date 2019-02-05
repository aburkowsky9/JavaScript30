function handlePanelSizing() {
  handleClassList('open', this);
}

function handleTextTransition(event) {
  if (event.propertyName === 'flex' || event.propertyName === 'flex-grow') {
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
    panel.addEventListener('click', handlePanelSizing);
    panel.addEventListener('transitionend', handleTextTransition);
  }); 
})();