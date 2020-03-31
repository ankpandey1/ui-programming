function removeFieldsAsRequired(){
	document.getElementById('cname1').required=false;	
	document.getElementById('ccnum1').required=false;
	document.getElementById('expmonth1').required=false;
	document.getElementById('expyear1').required=false;
	document.getElementById('cvv1').required=false;
}

function clearEverything(){
    localStorage.setItem("table", "0");
	fetchTablePayment(0);
	localStorage.removeItem("order");
	var myNode = document.getElementsByClassName('cart-items')[0];
	while (myNode.firstChild) {
    myNode.removeChild(myNode.lastChild);
	}
	window.location.reload();
	alert("Please pay at the counter!!")
}