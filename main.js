// Get the modal element
var modal = document.querySelector(".modal");

// Get the button that opens the modal
var btn = document.querySelector(".book__ride__btn");

// Get the <span> element that closes the modal
var closeBtn = document.querySelector(".close");

// When the user clicks the button, open the modal
btn.addEventListener("click", function () {
	modal.style.display = "block";
	document.body.style.overflow = "hidden"; // Prevent scrolling on the page
});

// When the user clicks on <span> (x), close the modal
closeBtn.addEventListener("click", function () {
	modal.style.display = "none";
	document.body.style.overflow = "auto"; // Allow scrolling on the page
});

// When the user clicks anywhere outside of the modal, close it
window.addEventListener("click", function (event) {
	if (event.target == modal) {
		modal.style.display = "none";
		document.body.style.overflow = "auto"; // Allow scrolling on the page
	}
});

document.addEventListener("DOMContentLoaded", function () {
	const images = document.querySelectorAll(".background-image");
	let index = 0;

	setInterval(() => {
		images[index].classList.remove("active");
		index = (index + 1) % images.length;

		images[index].classList.add("active");
		// document.querySelector(".background-carousel").style.transform = `translateX(-${index * 100}%)`;
	}, 8000);
});
