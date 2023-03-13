// https://github.com/levinunnink/html-form-to-google-sheet

const progressBars = document.querySelectorAll('.progress-bar');

progressBars.forEach(bar => {
  const percent = bar.getAttribute('data-percent');
  bar.style.width = '0';
  setTimeout(() => {
    bar.style.width = `${percent}%`;
    const percentLabel = bar.querySelector('.percent-label');
    percentLabel.innerText = `${percent}%`;
  }, 100);
});