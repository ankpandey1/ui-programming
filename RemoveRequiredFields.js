//Boolean to keep check of the Payment at counter checkbox
IsPaymentAtCounter = false;

//States all fields as not required on checking the pay at the counter checkbox
function removeFieldsAsRequired(){
	document.getElementById('cname1').required=false;	
	document.getElementById('ccnum1').required=false;
	document.getElementById('expmonth1').required=false;
	document.getElementById('expyear1').required=false;
	document.getElementById('cvv1').required=false;
	IsPaymentAtCounter = true;
}

//Stores data for bartender table view
//Removes data from the payment cart
//Removes order from local storage
function clearEverything(){
    localStorage.setItem("table", "0");
	fetchTablePayment(0);
	localStorage.removeItem("order");
	var myNode = document.getElementsByClassName('cart-items')[0];
	while (myNode.firstChild) {
    myNode.removeChild(myNode.lastChild);
	}
	window.location.reload();
	if(IsPaymentAtCounter){
		alert("Please pay at the counter!!")
	}
	navigateToMenu();
}

//Asks the user if he/she wants to navigate back to the menu page after placing an order
function navigateToMenu(){
	window.alert("Order Placed")
	var answer = window.confirm("Do you want to navigate to the order page?")
	if(answer){
		window.location.assign('orderPage.html')
	}
}