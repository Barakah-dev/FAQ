const accordion = document.querySelectorAll('.accordion');
const question = document.querySelectorAll('.question');
const plus = document.querySelectorAll('.plus');
const minus = document.querySelectorAll('.minus');
const response = document.querySelectorAll('.response');


for (let i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener('click', (e) =>  {
    let clickedEl = e.target;

    if (clickedEl.classList.contains('plus')) {
      plus[i].classList.toggle('hidden');
      minus[i].classList.toggle('hidden');
      response[i].classList.toggle('hidden');
    } 
    
    else if (clickedEl.classList.contains('minus')) {
      plus[i].classList.toggle('hidden');
      minus[i].classList.toggle('hidden');
      response[i].classList.toggle('hidden');
    }
  })  
};

const body = document.querySelector('body');
const nav = document.querySelector('nav');
const logo = document.querySelector('.logo');
const mode = document.querySelector('.mode');
const night = document.querySelector('.night');
const day = document.querySelector('.day');
const container = document.querySelector('.container');
const first = document.querySelector('.first');
const second = document.querySelector('.second');
const third = document.querySelector('.third');
const fourth = document.querySelector('.fourth');
const fifth = document.querySelector('.fifth');
const sixth = document.querySelector('.sixth');


mode.addEventListener('click', (e) => {
  let clickedEl = e.target;
  if (clickedEl.classList.contains('night')) {
    body.classList.toggle('dark-body');
    nav.classList.toggle('dark-nav');
    logo.classList.toggle('dark-logo');
    container.classList.toggle('dark-container');
    first.classList.toggle('dark-first');
    second.classList.toggle('dark-second');
    third.classList.toggle('dark-third');
    fourth.classList.toggle('dark-fourth');
    fifth.classList.toggle('dark-fifth');
    sixth.classList.toggle('dark-sixth');
    night.classList.toggle('hidden')
    day.classList.toggle('hidden')
  }

  else if (clickedEl.classList.contains('day')) {
    body.classList.toggle('dark-body');
    nav.classList.toggle('dark-nav');
    logo.classList.toggle('dark-logo');
    container.classList.toggle('dark-container');
    first.classList.toggle('dark-first');
    second.classList.toggle('dark-second');
    third.classList.toggle('dark-third');
    fourth.classList.toggle('dark-fourth');
    fifth.classList.toggle('dark-fifth');
    sixth.classList.toggle('dark-sixth');
    night.classList.toggle('hidden')
    day.classList.toggle('hidden')
  }
})