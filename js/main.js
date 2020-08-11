var items = document.getElementsByTagName("li");
var icons = document.getElementsByTagName("span");

// checks a element off
for (let li of items) {
	li.addEventListener("click", function () {
		this.classList.toggle("checked");
	});
}

// deletes a element in the list
for (let i of icons) {
	i.addEventListener("click", deleteEffect);
}

var input = document.querySelector("input");

input.addEventListener("keydown", (event) => {
	if (event.code === "Enter" || event.which === "Enter") {
		createLi();
	}
});

function createLi() {
	let ul = document.querySelector("ul");
	let newLi = document.createElement("li");
	let newSpan = document.createElement("span");
	let icon = document.createElement("i");

	icon.classList.add("fa", "fa-minus-circle");
	icon.setAttribute("aria-hidden", "true");

	newSpan.appendChild(icon);
	newSpan.addEventListener("click", deleteEffect);

	newLi.appendChild(newSpan);
	newLi.appendChild(document.createTextNode(input.value));
	newLi.addEventListener("click", function () {
		this.classList.toggle("checked");
	});

	ul.appendChild(newLi);
}

function deleteEffect() {
	event.stopPropagation();
	var fadeTarget = this.parentElement;

	let fadeEffect = setInterval(function () {
		if (!fadeTarget.style.opacity) {
			fadeTarget.style.opacity = 1;
		}
		if (fadeTarget.style.opacity > 0) {
			fadeTarget.style.opacity -= 0.1;
		} else {
			clearInterval(fadeEffect);
			fadeTarget.remove();
		}
	}, 100);
}

function addItem() {
	input.classList.toggle("hide-input");
}
