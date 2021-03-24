/* Alert Remove by Click */

function alertClose() {
	// Alert
	const CLOSEBUTTONS = document.querySelectorAll("[data-dismiss='alert']");
	closeButton();

	function closeButton() {
		for (const CLOSEBUTTON of CLOSEBUTTONS) {
			CLOSEBUTTON.addEventListener('click', (event) => {
				event.preventDefault();
				CLOSEBUTTON.parentElement.classList.add('fadeOut');
				setTimeout(function () {
					CLOSEBUTTON.parentElement.remove();
				}, 300);
			});
		}
	}
}

/* Show Menu Overlay Pane  */
function showMenuPanes() {
	const BUTTON = document.querySelector('.dp-c-menu-toggle');
	const BODY = document.querySelector('body');
	const SVG = document.querySelector('.dp-c-menu-toggle__image');
	const PANES = document.querySelector('.dp-l-panes-nav');

	if (PANES && BUTTON) {
		BUTTON.addEventListener('click', (event) => {
			if (!menuIsOpen()) {
				event.preventDefault();
				// Open Menu
				BODY.classList.add('dp-u-noscroll');

				openMenuPanes();
				openButton();
			} else {
				// Close Menu
				BODY.classList.remove('dp-u-noscroll');

				closeMenuPanes();
				closeButton();
			}
		});
	}

	function menuIsOpen() {
		return PANES.classList.contains('is-expanded');
	}

	function openButton() {
		BUTTON.classList.add('active');
		BUTTON.setAttribute('aria-expanded', 'true');
		SVG.classList.add('active');
	}
	function closeButton() {
		BUTTON.classList.remove('active');
		BUTTON.removeAttribute('aria-expanded', 'true');
		SVG.classList.remove('active');
	}

	function openMenuPanes() {
		PANES.classList.add('is-expanded');
		PANES.setAttribute('aria-hidden', 'false');
	}

	function closeMenuPanes() {
		PANES.classList.remove('is-expanded');
		PANES.setAttribute('aria-hidden', 'true');
	}
}

document.addEventListener('DOMContentLoaded', () => {
	alertClose();
	showMenuPanes();
});

/*  Scroll Header Style  */
function scrollHeader() {
	const HEADER = document.querySelector('.dp-l-header');
	//When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
	if (this.scrollY >= 200) HEADER.classList.add('scroll-header');
	else HEADER.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader);

/*  Show Scroll Top   */
function scrollTop() {
	const SCROLLTOP = document.getElementById('scroll-top');
	// When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
	if (this.scrollY >= 560) SCROLLTOP.classList.add('show-scroll');
	else SCROLLTOP.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollTop);
