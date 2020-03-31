

function fetchTablePayment(tablenr){
	window.localStorage.setItem('table'+(tablenr+1)+'pay', JSON.stringify("yes"));
	    
}
// Updates a tables payment status to "yes", which means they want to pay.
function updatePay(tablenr) {
    var DB = wanttoPay;
    var table = Object.keys(DB)
    for (i = 0; i<DB[table].length; i++) {
        if (tablenr == parseInt(DB[table][i].table)-1)
        {
            DB[table][i].pay = "yes"
        }
    }
}

// Displays the tables that wants to pay and the tables total amount to be payed
// This is done when "refresh" is clicked
function viewPaylist() {
    document.getElementById("waitingpay").innerHTML = "";
    for (i = 0; i<4; i++) {
        var pay = JSON.parse(localStorage.getItem('table'+(i+1)+'pay'));
        console.log(pay)
        if (pay == "yes") {
            var list = document.createElement("li");
            var order = document.createTextNode("Table: " + (i + 1) + "_|_ " + (JS[db][i].sum) + " SEK");
            list.appendChild(order)
            document.getElementById("waitingpay").appendChild(list);
        }
    }    
}
