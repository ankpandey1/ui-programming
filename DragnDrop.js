var beverageName = "";
var price = "";
function startDragging(ev) {
	beverageName = ev.getElementsByClassName('aName')[0].innerText;
	price = ev.getElementsByClassName('aPrice')[0].innerText
	price = parseInt(price.substring(0, price.length - 4))
	beverageId = beverageName.replace(/ /gi, '-');
}

function allowDrop(ev) {
    ev.preventDefault();
}

function drop(ev) {
	console.log(ev.target.id);
    make_drag(ev.target.id);
}

function make_drag(to) {

	console.log(document.getElementById(beverageId))
	if(document.getElementById(beverageId) === null){
		
		    var cartRow = document.createElement('div')
			cartRow.classList.add('cart-row')
			var cartItems = document.getElementsByClassName('cart-items')[0]
//			var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
	//		for (var i = 0; i < cartItemNames.length; i++) {
		//		if (cartItemNames[i].innerText == title) {
			//		alert('This item is already added to the cart')
				//	return
				//}
			//}
			getTotalPrice();

			var cartRowContents = `
			<div class="cart-item cart-column">
            <span class="cart-item-title" id=${beverageId}>${beverageName}</span>
			</div>
			<span class="cart-price cart-column">${price}</span>
			<div class="cart-quantity cart-column">
				<input class="cart-quantity-input" type="number" value="1">
			</div>`
			cartRow.innerHTML = cartRowContents
			cartItems.append(cartRow)
			cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
	}else{
		count = parseInt(document.getElementById(beverageId).parentElement.parentElement.getElementsByClassName('cart-quantity cart-column')[0].getElementsByClassName('cart-quantity-input')[0].value)
		count = count + 1;
		document.getElementById(beverageId).parentElement.parentElement.getElementsByClassName('cart-quantity cart-column')[0].getElementsByClassName('cart-quantity-input')[0].value = count;
		getTotalPrice();

	}
	
		
	//	$('cart-items').append('
	//}
}
	function getTotalPrice(){
	let total = parseInt(document.getElementsByClassName("cart-total-price-value")[0].innerText)
	if(isNaN(total)){
		total = 0;
	}
	total = total + price;
	document.getElementsByClassName("cart-total-price-value")[0].innerText = total;
	}