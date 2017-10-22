var val = 0, progress = 0;

function progressBar() {
  val += 0.005;
  progress = (val * 50 > 400) ? 400 : val * 50; /* 50 is 1/8th of height, 400 is height */
  document.querySelector('.progress-now')
    .setAttribute('style', `width: ${progress}px`);
  if (val <= 8) anim = window.requestAnimationFrame(progressBar);
}

progressBar();