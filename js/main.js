/* SHARE BUTTON HOVER */
(function() {

	// BUTTON HOVERS
	var shareBtn = document.querySelector('.share-btn');
	var shareBtnBg = document.querySelector('.share-btn-bg');
	var shareBtnClose = document.querySelector('.share-btn--close');
	var shareBtnCloseBg = document.querySelector('.share-btn--close-bg');

	// DROPDOWN
	var dropdown = document.querySelector('.share-dropdown');
	var dropdownItem = document.querySelectorAll('.share-dropdown-item');

	var active = false;

	var toggleShare = function () {
		if (!active) {
			dropdown.classList.add('share-dropdown--active');
			for (var i = 0, ii = dropdownItem.length; i < ii; i++) {
				dropdownItem[i].classList.add('share-dropdown-item--active');
			}

			active = true;
		}	else {
			dropdown.classList.remove('share-dropdown--active');
			for (var i = 0, ii = dropdownItem.length; i < ii; i++) {
				dropdownItem[i].classList.remove('share-dropdown-item--active');
			}

			active = false;
		}
	};

	shareBtn.addEventListener('click', toggleShare, false);
	shareBtnClose.addEventListener('click', toggleShare, false);

	// shareBtn.addEventListener('mouseover', mouseOver);
	// shareBtn.addEventListener('mouseout', mouseOut);

	// function mouseOver() {
	// 	shareBtnBg.classList.add('share-btn-bg--active');
	// }
	// function mouseOut() {
	// 	shareBtnBg.classList.remove('share-btn-bg--active');
	// }


}());
