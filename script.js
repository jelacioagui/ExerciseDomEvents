var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function toggleDone(task){
	if (task.target.tagName == "LI"){
		task.target.classList.toggle("done");
	}
}

function delClass(task){
	if (task.target.className == "delClass"){
		task.target.parentElement.remove();
	}
}

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";

	var delButton = document.createElement("button");
	delButton.appendChild(document.createTextNode("Delete"))
	delButton.classList.add("delClass")
	li.appendChild(delButton);
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function ulClicker(event) {
	toggleDone(event);
	delClass(event);

}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
ul.addEventListener("click", ulClicker);