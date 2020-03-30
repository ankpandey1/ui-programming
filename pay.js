

function fetchTablePayment(){
	var order = window.localStorage.getItem("table");
	updatePay(parseInt(order))
	window.localStorage.removeItem("table")

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
    var DB = wanttoPay;
    var JS = testJSON;
    var table = Object.keys(DB)
    var db = Object.keys(JS)
    document.getElementById("waitingpay").innerHTML = "";
    
    for (i = 0; i<DB[table].length; i++) {
        if (DB[table][i].pay == "yes") {
            
            var list = document.createElement("li");
            var order = document.createTextNode("Table: " + (i + 1) + " wants to pay - " + (JS[db][i].sum) + " SEK");
            list.appendChild(order)
            document.getElementById("waitingpay").appendChild(list);
        }
    }    
}
