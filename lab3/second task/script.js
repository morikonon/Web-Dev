let inputBox = document.getElementById("input-box")
let listContainer = document.getElementById("list-container")
let deletedContainer = document.getElementById("deleted-container")

function addTask(){
	if(inputBox.value === ""){
		alert("Error");
	}
	else{
		let li = document.createElement("li");
		li.innerHTML = inputBox.value;
		listContainer.appendChild(li);
		let span = document.createElement("span");
		span.innerHTML = "*";
		li.appendChild(span);
		deletedContainer.appendChild(li)
	}
	inputBox.value = "";
	saveData();
}

listContainer.addEventListener("click" , function(e){
	if(e.target.tagName === "LI"){
		e.target.classList.toggle("checked");
		deletedContainer.appendChild(e.target)
		saveData();
	}
	else if(e.target.tagName = "SPAN"){
		let ask = prompt("Are you sure?")
		if(ask === "Yes"){
			let li = document.createElement("li");
			li.textContent = e.target.parentElement;
			deletedContainer.appendChild(li);
			e.target.parentElement.remove();
			saveData();
		}
		else{
			alert("OK");
		}
	}
},false);

function saveData(){
	localStorage.setItem("data" , listContainer.innerHTML);
}
function showData(){
	listContainer.innerHTML = localStorage.getItem("data");
}
showData();