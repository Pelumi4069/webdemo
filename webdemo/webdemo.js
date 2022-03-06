const menu = document.querySelector('#mobilemenu');
const menulinks = document.querySelector('.navmenu');
const navLogo = document.querySelector('#navlogo')

//Display mobile menu
const mobileMenu = () => {
	menu.classList.toggle('is-active');
	menulinks.classList.toggle('active');
}

menu.addEventListener('click', mobileMenu);

// show active menu when scrolling
const highlightMenu = () => {
	const elem = document-querySelector('.highlight');
	const homeMenu = document-querySelector('#home-page');
	const aboutMenu = document-querySelector('#about-page');
	const ServicesMenu = document-querySelector('#services-page');
	let scrollPos = window.scrollY;
	console.log(scrollPos);

	//adds the highlights class to my menu items
	if(window.innerWidth > 960 && scrollPos < 600) {
		homeMenu.classList.add('highlight');
		aboutMenu.classList.remove('highlight');
		return
	} else if (window.innerWidth > 960 && scrollPos < 1400) {
aboutMenu.classList.add('highlight');
homeMenu.classList.remove('highlight');
ServicesMenu.classList.remove('highlight');
return
	} else if (window.innerWidth > 960 && scrollPos < 2345) {
		ServicesMenu.classList.add('highlight');
		aboutMenu.classList.remove('highlight');
		return
	}
       if((elem && window.innerWidth < 960 && scrollPos < 600) || elem) {
	 elem.classList.remove('highlight'); 
	   }
	}
	window.addEventListener('scroll', hightightMenu);
	window.addEventListener('click', hightightMenu);

	//close mbile menu when closing on a menu list
	const hideMobileMenu = () => {
		const menubars = document.querySelector('.is-active');
		if(window.innerWidth <= 768 && menuBars) {
			menu.classList.toggle('is-active');
			menulinks.classList.remove('active');
		}
	};

	menulinks.addEventListener('click', hideMobileMenu);
	navLogo.addEventListener('click', hideMobileMenu);
