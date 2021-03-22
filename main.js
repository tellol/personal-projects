var clicked = false;
const annualyBasic = "$439 <span> / annualy </span>"
const annualyPremium = "$539 <span> / annualy </span>"
const annualyBusiness = "$639 <span> / annualy </span>"

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

function toggleAnnualy(){
	if(!clicked){
		clicked = true;
		document.getElementById("basic-price").innerHTML = annualyBasic
		document.getElementById("premium-price").innerHTML = annualyPremium
		document.getElementById("business-price").innerHTML = annualyBusiness
	}
	else{
		clicked = false;
	}
}
