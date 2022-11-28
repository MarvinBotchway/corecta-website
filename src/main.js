


// open/close the menu when the user clicks on the button
function toggleMenu(menu) {
	var currentMenu = document.getElementById(menu);

	if (currentMenu.classList.contains('hidden')) {
		currentMenu.classList.remove('hidden');
	} else {
		currentMenu.classList.add('hidden');
	}
}

// close the menu when the user clicks outside of it 
window.onclick = function (event) {
	var dropdownWrapper = document.getElementById('dropdown-wrapper');
	if (!dropdownWrapper.contains(event.target) && !menu.classList.contains('hidden')) {
		menu.classList.add('hidden');
		}
	}