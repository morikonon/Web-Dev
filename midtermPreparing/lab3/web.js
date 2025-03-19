let container = document.querySelector(".container"); // Исправлено
let inputBox = document.querySelector(".input-box"); // Исправлено

function addTask() {
	if (inputBox.value.trim() === "") { // Используем trim() для удаления лишних пробелов
		alert("Error!");
	} else {
		let li = document.createElement("li");
		li.textContent = inputBox.value; // Используем textContent вместо innerHTML
		let span = document.createElement("span");
		span.innerHTML = "*";
		li.appendChild(span);
		container.appendChild(li);
	}
	saveData();
	inputBox.value = ""; // Очищаем поле ввода
}

container.addEventListener("click" , function(e){
	if(e.target.tagName === "LI"){
		e.target.classList.toggle("checked");
		saveData();
	}
	if(e.target.tagName === "SPAN"){
		e.target.parentElement.remove();
		saveData();
	}
	else{
		alert("Ok");
	}
},false)

function saveData(){
	localStorage.setItem("data" , container.innerHTML);
}

function showData(){
	container.innerHTML = localStorage.getItem("data");
}

showData();