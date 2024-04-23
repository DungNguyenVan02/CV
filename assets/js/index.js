const slideBarItems = document.querySelectorAll(".slidebar__item");
const previewElement = document.querySelector(".preview");
const imgElement = document.querySelector(".avatar");
const imgShowElement = document.querySelector(".preview__show");
const menuShowMore = document.querySelector(".sidebar__menu-icon");
const slidebarMenuList = document.querySelector(".slidebar__menu");

const handleRemoveClassActive = () => {
	slideBarItems.forEach((item) => {
		if (window.innerWidth < 600) {
			const isActive = !slidebarMenuList.classList.contains("active");
			slidebarMenuList.classList.toggle("active", isActive);
		}
		if (item.classList.contains("slidebar--active")) {
			item.classList.remove("slidebar--active");
		}
	});
};

for (let item of Array.from(slideBarItems)) {
	item.addEventListener("click", () => {
		handleRemoveClassActive();
		item.classList.add("slidebar--active");
	});
}

window.addEventListener("resize", (e) => {
	if (e.currentTarget.innerWidth > 600) {
		if (slidebarMenuList.classList.contains("active")) {
			slidebarMenuList.classList.remove("active");
		}
	}
});

imgElement.addEventListener("click", () => {
	previewElement.style.display = "flex";
});

previewElement.addEventListener("click", () => {
	previewElement.style.display = "none";
});

imgShowElement.addEventListener("click", (e) => {
	e.stopPropagation();
});

menuShowMore.addEventListener("click", () => {
	const isActive = !slidebarMenuList.classList.contains("active");
	slidebarMenuList.classList.toggle("active", isActive);
});

var typed = new Typed(".text", {
	strings: [
		"welcome to look at my profile! 👋",
		"I am a website application developer. 👨‍💻",
	],
	typeSpeed: 100,
	backSpeed: 120,
	backDelay: 1000,
	loop: true,
});
