// variables

const bodyColor = document.querySelector('body');
const bulb = document.querySelector('#bulb');
const circle = document.querySelector('#circle');
const btn = document.querySelector('button');

// Using querySelectorAll because there are 2 fillament paths
const fillament = document.querySelectorAll('.fillament');

btn.addEventListener('click', function() {
  bulb.classList.toggle('dark');
  circle.classList.toggle('circle-dark');
  bodyColor.classList.toggle('body-dark');

  // Need to loop over fillaments because querySelectorAll returns an array
  fillament.forEach(elem => {
    elem.classList.toggle('fillament-dark');
  })
})
