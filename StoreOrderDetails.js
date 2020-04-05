//STores the order items to browser local storage and the DB
function storeOrderDetails() {
  var cartItems = document.getElementsByClassName("cart-items");
  var childNodes = cartItems[0].childNodes;
  for (i = 1; i < childNodes.length; i++) {
    appendToStorage("order", {
      name: childNodes[i].getElementsByClassName("cart-item-title")[0]
        .innerText,
      price: childNodes[i].getElementsByClassName("cart-price")[0].innerText,
      quantity: childNodes[i].getElementsByClassName("cart-quantity-input")[0]
        .value
    });
  }
	storeDetailsinDB();

  //Appends the order details to browser's local storage
  function appendToStorage(name, data) {
    var old = localStorage.getItem(name);
    if (old) {
      var oldData = JSON.parse(old);
      localStorage.setItem(name, JSON.stringify([...oldData, data]));
    } else {
      localStorage.setItem(name, JSON.stringify([data]));
    }
  }
}

//Stores details in DB for bartender to fetch
function storeDetailsinDB(){
	var order = window.localStorage.getItem("order");
	var total = 0;
	var orderObject = JSON.parse(order);
	for(i=0;i<orderObject.length;i++){
		for(j=0;j<orderObject[i].quantity;j++){
			JS[db][0].orders.push(orderObject[i].name); 
			total = parseInt(total) + parseInt(orderObject[i].price);
		}
	}
	JS[db][0].sum = total;
}