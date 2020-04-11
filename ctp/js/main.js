import Slideshow from './Slideshow.js';

const articleContainer = document.querySelector('.slideshowContainer');
document.querySelector('a#slideshow').setAttribute('class', 'selected');

articleContainer.style.display = 'initial';

var oldSection = articleContainer;

const sections = ['.slideshowContainer', '.aboutContainer', 'seriesContainer'];

function handleNavClick(event) {
	event.preventDefault();
	const li = event.currentTarget,
		prevActiveLi = document.querySelectorAll('.mainMenu a');

	const liSection = document.querySelector(`.${this.id}Container`);

	prevActiveLi.forEach(link => link?.setAttribute('class', ' '));

	oldSection.style.display = 'none';
	oldSection = liSection;

	li.setAttribute('class', 'selected');
	liSection.style.display = 'initial';
}

const navLinks = document.querySelectorAll('.mainMenu a');
navLinks.forEach(link => link.addEventListener('click', handleNavClick));

const images = 'twd,got,td',
	element = document.querySelector('.slideshowContainer .slideshow');

const s = new Slideshow(images, element);

s.render();

function handleNextClick(event) {
	event.preventDefault();
	s.next();
}

function handlePrevClick(event) {
	event.preventDefault();
	s.prev();
}

const nextButton = document.querySelector('.nextButton');
const prevButton = document.querySelector('.prevButton');

nextButton.addEventListener('click', handleNextClick);
prevButton.addEventListener('click', handlePrevClick);
