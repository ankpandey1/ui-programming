function orderPlace(){
	setCookie('session','order.html',2);
	$('body').load('order.html');
}


function orderHistory(){
	window.location.assign("orderHistory.html");
}

function pay(){
	window.location.assign("paymentPage.html");
}