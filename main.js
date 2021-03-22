var clicked = false;
const anuallyBasic = "$439 <span> / anually </span>"
const anuallyPremium = "$539 <span> / anually </span>"
const anuallyBusiness = "$639 <span> / anually </span>"

function toggleMonthly(){
	if(!clicked){
		clicked = true;
		document.getElementById("basic-price").innerHTML = "$39 <span> / monthly </span>"
		document.getElementById("premium-price").innerHTML = "$49 <span> / monthly </span>"
		document.getElementById("business-price").innerHTML = "$59 <span> / monthly </span>"
	}
	else{
		clicked = false;
	}
}

function toggleAnually(){
	if(!clicked){
		clicked = true;
		document.getElementById("basic-price").innerHTML = anuallyBasic
		document.getElementById("premium-price").innerHTML = anuallyPremium
		document.getElementById("business-price").innerHTML = anuallyBusiness
	}
	else{
		clicked = false;
	}
}
