'use strict';

// Select All items
const Allitems = document.querySelectorAll(".item");

// Reveal item function
function revealItem (items, observer){
	items.forEach(item => {
		if (item.isIntersecting) {
			item.target.classList.add('reveal',)
		} else {
			item.target.classList.remove('reveal',)
		}
	});
}

// Item Observer
const itemObserver = new IntersectionObserver(revealItem, {
	rootMargin: '-20px',
});

// Observer all item
Allitems.forEach(item => {
	itemObserver.observe(item);
})