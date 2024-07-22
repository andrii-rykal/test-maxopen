'use strict';


const buttonResearch = document.querySelector('.menu-research-button');
const researchList = document.querySelector('.menu-research-links');
const arrowDownResearch = document.querySelector('.menu-research-down');
const arrowUpResearch = document.querySelector('.menu-research-up');

buttonResearch.addEventListener('click', () => {
  researchList.classList.toggle('hidden');
  arrowDownResearch.classList.toggle('hidden');
  arrowUpResearch.classList.toggle('hidden');
});


const buttonСonsulting = document.querySelector('.menu-consulting-button');
const consultingList = document.querySelector('.menu-consulting-links');
const arrowDownСonsulting = document.querySelector('.menu-consulting-down');
const arrowUpСonsulting = document.querySelector('.menu-consulting-up');

buttonСonsulting.addEventListener('click', () => {
  consultingList.classList.toggle('hidden');
  arrowDownСonsulting.classList.toggle('hidden');
  arrowUpСonsulting.classList.toggle('hidden');
});

const buttonResearchNav = document.querySelector('.header-research-button');
const researchListNav = document.querySelector('.header-research-links');

buttonResearchNav.addEventListener('click', () => {
  researchListNav.classList.toggle('hidden');
});

const buttonConsultingNav = document.querySelector('.header-consulting-button');
const consultingListNav = document.querySelector('.header-consulting-links');

buttonConsultingNav.addEventListener('click', () => {
  consultingListNav.classList.toggle('hidden');
});

document.addEventListener('mousedown', () => {
  if (!researchListNav.classList.contains('hidden')) {
    researchListNav.classList.add('hidden')
  }
})
document.addEventListener('mousedown', () => {
  if (!consultingListNav.classList.contains('hidden')) {
    consultingListNav.classList.add('hidden')
  }
})







