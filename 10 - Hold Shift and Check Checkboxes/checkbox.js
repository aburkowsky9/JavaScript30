const checkboxes = document.querySelectorAll('input[type=checkbox]');
let indexesChecked = [];

checkboxes.forEach((checkbox, i) => {
  checkbox.addEventListener('click', function(e) {
    checkMultipleBoxes.call(this, e, i);
  });
});

function checkMultipleBoxes(e, idxClicked) {
  if (!e.shiftKey) {
    if (this.checked) {
      indexesChecked.push(idxClicked);
    } else {
      indexesChecked = indexesChecked.filter((elem) => elem !== idxClicked);
    }
    return;
  }
  // last input checked in array or last input item if none
  let lastIdxChecked = indexesChecked[indexesChecked.length-1];
  if (lastIdxChecked === undefined) lastIdxChecked = checkboxes.length-1;

  checkboxes.forEach((checkbox, currIdx) => {
    if (idxClicked < lastIdxChecked) {
      if (currIdx > idxClicked && currIdx <= lastIdxChecked) {
        checkbox.checked = true;
      }
    } else {
      if (currIdx < idxClicked && currIdx >= lastIdxChecked) {
        checkbox.checked = true;
      }
    } 
  })
  // push to indexesChecked array if checked
  if (this.checked) {
    indexesChecked.push(idxClicked);
  }
}
