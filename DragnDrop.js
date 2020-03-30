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
                <span class="minus">-</span>\				
				<input class="cart-quantity-input" type="number" value="1"  min="1" max="10">
                <span class="plus">+</span>\				
			</div>`
			cartRow.innerHTML = cartRowContents
			cartItems.append(cartRow)
			cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
			cartRow.getElementsByClassName('minus')[0].addEventListener('onclick', quantityChangedByButton)
			cartRow.getElementsByClassName('plus')[0].addEventListener('onclick', quantityChangedByButton)

	}else{
            var $input = $(this).parent().find('input');
            var count = parseInt($input.val()) + 1;
            count = count > 10 ? 10 : count;
            $input.val(count);
            $input.change();
			document.activeElement.value = count
			
//		count = parseInt($(this).getElementsByClassName('cart-quantity-input')[0].value)
//		count = parseInt(document.getElementById(beverageId).parentElement.parentElement.getElementsByClassName('cart-quantity cart-column')[0].getElementsByClassName('cart-quantity-input')[0].value)
//		count = count + 1;
//		$(this).parent.getElementsByClassName('cart-quantity-input')[0].value = count;
	//	document.getElementById(beverageId).parentElement.parentElement.getElementsByClassName('cart-quantity cart-column')[0].getElementsByClassName('cart-quantity-input')[0].value = count;
		getTotalPrice();

	}
	//add the script for controlling the number input (add and subtract) for each item
   $('.cart-items').ready(function() {

        $('.minus').click(function() {
            var $input = $(this).parent().find('input');
            var count = parseInt($input.val()) - 1;
            count = count < 1 ? 1 : count;
            $input.val(count);
            $input.change();
			updateCartTotal()
            return false;
        });
        $('.plus').click(function() {
            var $input = $(this).parent().find('input');
            var count = parseInt($input.val()) + 1;
            count = count > 10 ? 10 : count;
            $input.val(count);
            $input.change();
			updateCartTotal()
            return false;
        });
    });
	
		    document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)
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
	
	function placeOrder(){
		var cartItems = document.getElementsByClassName('cart-items')[0]
		
		
	}
	
	function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateCartTotal()
}

//left empty by choice
function quantityChangedByButton(){
}

function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    var total = 0
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        var price = parseFloat(priceElement.innerText.replace('$', ''))
        var quantity = quantityElement.value
        total = total + (price * quantity)
    }
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('cart-total-price-value')[0].innerText = total
}

function placeOrderAlert(){


	
}

function purchaseClicked() {
	storeOrderDetails();
	var answer = window.confirm("Do you want to place the order?")
    
	if(answer){
		var cartItems = document.getElementsByClassName('cart-items')[0]
		while (cartItems.hasChildNodes()) {
			cartItems.removeChild(cartItems.firstChild)
		}
		updateCartTotal()
	}
}