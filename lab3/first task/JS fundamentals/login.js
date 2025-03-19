let user = prompt("Who is there?" , "");
if(user === "Admin"){
	let pass = prompt("Password : " , "");
	if(pass = "TheMaster"){
		alert("Welcome");
	}
	else if(pass === "" || pass === null){
		alert("Canceled");
	}
	else{
		alert("Wrong....");
	}
}
else if(user === "" || user === null){
	alert("Canceled");
}
else{
	alert("Wrong...");
}