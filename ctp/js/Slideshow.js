export default class Slideshow {
	images;
	element;
	html;
	currentImage = 0;

	constructor(images, element) {
		this.images = images.split(',');
		this.element = element;
	}

	render() {
		this.html = `<a href="images/${
			this.images[this.currentImage]
		}.gif"><img src="images/${this.images[this.currentImage]}.gif"/></a>`;
		this.element.innerHTML = this.html;
		return this.html;
	}

	next() {
		if (this.currentImage + 1 > this.images.length - 1) this.currentImage = 0;
		else this.currentImage++;
		this.render();
	}

	prev() {
		if (this.currentImage - 1 < 0) this.currentImage = this.images.length - 1;
		else this.currentImage--;
		this.render();
	}
}
