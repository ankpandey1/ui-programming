
// When the user clicks on <span> (x), close the modal
$(document).ready(function(){
  // Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("review");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closeModal");

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
});
//function to close modal
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

// When the user clicks the button, open the modal 
function openModal() {
  var modalContent = document.getElementById("modalContent");
  
var order = window.localStorage.getItem("order");
var orderObject = JSON.parse(order);


if(orderObject===null){
	window.alert("Please place an order first!!");
	
}
else{
	  document.getElementById("myModal").style.display = "block";

  for(i=0;i<orderObject.length;i++){
	 var cartRow = document.createElement('div')

	cartRow.classList.add('cart-row')

	var cartRowContents = `
			<div class="cart-item cart-column">
            <span class="cart-item-title">`+orderObject[i].name+`</span>
			</div>
			<span class="cart-price cart-column">`+orderObject[i].price+`</span>
			<div class="cart-quantity cart-column">`+orderObject[i].quantity + ` </div>`

	cartRow.innerHTML = cartRowContents
	modalContent.append(cartRow)

}

 var undoButtonDiv = document.createElement('div')

var undoButton = `<div><button id="cancelOrder" type="cancel-order" onclick="clearLocalStorage()">CANCEL ORDER</button></div>`
undoButtonDiv.innerHTML = undoButton

modalContent.append(undoButtonDiv)

}
}

//Clear local storage when user cancels orders
function clearLocalStorage(){
	var answer = window.confirm("Are you sure you want to cancel the order?")
	if(answer){
		localStorage.removeItem("order");
		closeModal();
	}

	
}