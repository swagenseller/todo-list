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
	i.addEventListener("click", function () {
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
	});
}

/*var fadeEffect = setInterval(function () {
    if (!fadeTarget.style.opacity) {
        fadeTarget.style.opacity = 1;
    }
    if (fadeTarget.style.opacity > 0) {
        fadeTarget.style.opacity -= 0.1;
    } else {
        clearInterval(fadeEffect);
    }
}, 200);*/
