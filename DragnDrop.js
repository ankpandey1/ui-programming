var beverageName = "";
var price = "";
//
function startDragging(ev) {
	beverageName = ev.getElementsByClassName('aName')[0].innerText;
	price = ev.getElementsByClassName('aPrice')[0].innerText
	price = parseInt(price.substring(0, price.length - 4))
	beverageId = beverageName.replace(/ /gi, '-');
}
        
// We want to prevent the standard handling and do it ourselves. This is the same as in the previous version.
function allowDrop(ev) {
    ev.preventDefault();
}

//Passing the target's id to the make_drag function
function drop(ev) {
    make_drag(ev.target.id);
}

//Adds the dragged element to the cart
function make_drag(to) {
	if(document.getElementById(beverageId) === null){
		
		    var cartRow = document.createElement('div')
			cartRow.classList.add('cart-row')
			var cartItems = document.getElementsByClassName('cart-items')[0]
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
            var count = parseInt(event.target.parentElement.parentElement.getElementsByClassName('cart-quantity-input')[0].value);
            count = count > 10 ? 10 : count + 1;
 //           $input.val(count);
   //         $input.change();
			event.target.parentElement.parentElement.getElementsByClassName('cart-quantity-input')[0].value = count
			
		getTotalPrice();

	}
	//Changes quantity by +/- button
   $('.cart-items').ready(function() {

        $('.minus').click(function() {
            var count = parseInt(event.target.parentElement.getElementsByClassName('cart-quantity-input')[0].value);
            count = count < 1 ? 1 : count-1;
			event.target.parentElement.getElementsByClassName('cart-quantity-input')[0].value = count;
			updateCartTotal()
            return false;
        });
        $('.plus').click(function() {
            var count = parseInt(event.target.parentElement.getElementsByClassName('cart-quantity-input')[0].value);
            count = count > 10 ? 10 : count+1;
			event.target.parentElement.getElementsByClassName('cart-quantity-input')[0].value = count;
			updateCartTotal()
            return false;
        });
    });
	
		    document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)
}
	//Computes total cart price
	function getTotalPrice(){
	let total = parseInt(document.getElementsByClassName("cart-total-price-value")[0].innerText)
	if(isNaN(total)){
		total = 0;
	}
	total = total + price;
	document.getElementsByClassName("cart-total-price-value")[0].innerText = total;
	}
	
	//Used to change quantity by input value
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

//Updates Cart's total and displays it
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

//Trigerred when place order button is clicked
//Removes elements from the cart
function purchaseClicked() {
	//Stores Data in the broswer storage before clearing
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