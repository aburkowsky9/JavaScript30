const images = document.querySelectorAll('.slide-in');

function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

function scrollHandler(e) {
  images.forEach((img) => {
    const windowBottomScroll = window.scrollY + window.innerHeight;
    const imgMid = img.offsetTop + img.height/2;
    const imgBottom = img.offsetTop + img.height;
    
    const isScrolledPastHalf = windowBottomScroll > imgMid;
    const isScrolledPastBottom = window.scrollY > imgBottom;

    if (isScrolledPastHalf && !isScrolledPastBottom) {
      img.classList.add('active');
    } else if (img.classList.contains('active')) {
      img.classList.remove('active');
    }
  });
}

const debouncedScrollHandler = debounce(scrollHandler);

window.addEventListener('scroll', debouncedScrollHandler);
