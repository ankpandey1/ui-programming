var productsShown = false;

var currentTable = 0;
//var TB = Tables;
var JS = testJSON;
var DB = Products;
var db = Object.keys(JS)


//var editidstart = 1000;
//var deleteidstart = 1100;
//var orderstart = 2000;

$(function () {
    //whenever new order is clicked it will display the available products
    $("#newordert1").click(function () {
        // TODO: set values to zero
        if (!productsShown)
        {
            displayProducts();  
        }
        currentTable = 1;
        productsShown = true;
    });
    $("#newordert2").click(function () {
        if (!productsShown)
        {
            displayProducts();  
        }
        currentTable = 2;
        productsShown = true;
    });
    $("#newordert3").click(function () {
        if (!productsShown)
        {
            displayProducts();  
        }
        currentTable = 3;
        productsShown = true;
    });
    $("#newordert4").click(function () {
        if (!productsShown)
        {
            displayProducts();  
        }
        currentTable = 4;
        productsShown = true;
    });

    // Whenever a numbered tablebutton is clicked it will display the current orders for said table.
    $("#table1").click(function () {       
        displayOrder(0)  
    });

    $("#table2").click(function () {       
        displayOrder(1)  
    });

    $("#table3").click(function () {       
        displayOrder(2)  
    });

    $("#table4").click(function () {       
        displayOrder(3)  
    });

    // Whenever a submit button is clicked it will make a new order for that table
    $("#submit1").click(function () {
        makenewOrder(0)
    });

    $("#submit2").click(function () {
        makenewOrder(1)
    });

    $("#submit3").click(function () {
        makenewOrder(2)
    });

    $("#submit4").click(function () {
        makenewOrder(3)
    });
    


});

// Function that deletes an order and then navigate to the product page.
function editOrder(item,tablenr) {
    var itemid = parseInt(document.getElementById(item).id) + 100;
    deleteOrder(itemid,tablenr)
    gotoOrderpage(tablenr)

}

// Based on current table nr and item it will delete that item from that tables orderlist
function deleteOrder(item,tablenr) {
    document.getElementById("undo"+(tablenr+1)).innerHTML = "";
    var itemid = parseInt(document.getElementById(item).id) + 900;
    var text = $("#"+(itemid)).contents().filter(function() {
        return this.nodeType == Node.TEXT_NODE;
      }).text();
    
    var db = Object.keys(JS)

    for (j = 0; j < JS[db][tablenr].orders.length; j++) {
        if (text == JS[db][tablenr].orders[j]) {           
            JS[db][tablenr].orders.splice(j, 1);       
        }       
    }
    removefromSum(text,tablenr)

    var undobutton = document.createElement("button")
    undobutton.innerHTML = "Undo deletion";
    undobutton.onclick = function() {

        undoDelete(tablenr,text);
        };

    document.getElementById("undo"+(tablenr+1)).appendChild(undobutton)
    displayOrder(tablenr)

}

// When "Undo deletion" is clicked, it will add the last removed item and update the database accordingly
function undoDelete(tablenr,item) {
    var db = Object.keys(JS)
    JS[db][tablenr].orders.push(item);
    addtoSum(item,tablenr);
    document.getElementById("undo"+(tablenr+1)).innerHTML = "";
    displayOrder(tablenr)  
}


// Function that displays the current orders given a tablenumber
function displayOrder(tablenr) {

    var editidstart = 1000;
    var deleteidstart = 1100;
    var orderstart = 2000;
    var item = Object.keys(JS)
    
    
    document.getElementById("orders"+(tablenr+1)).innerHTML = "";
    document.getElementById("sum"+(tablenr+1)).innerHTML = "";
    
        for (j = 0; j < JS[item][tablenr].orders.length; j++,editidstart++,deleteidstart++, orderstart++) {
            var newOrder = document.createElement("div");
            var list = document.createElement("li");
            var order = document.createTextNode(JS[item][tablenr].orders[j]);
            var editbutton = document.createElement("button");
            var deletebutton = document.createElement("button");

            editbutton.id = editidstart;
            deletebutton.id = deleteidstart;
            list.id = orderstart;

            editbutton.onclick = function() {

                editOrder(this.id,tablenr);
                };

            deletebutton.onclick = function() {

                deleteOrder(this.id,tablenr);
                };
            
            editbutton.innerHTML = "Edit";
            deletebutton.innerHTML = "Delete";

                
            
            list.appendChild(editbutton);
            list.appendChild(deletebutton);
            list.appendChild(order);
            newOrder.appendChild(list);
            document.getElementById("orders"+(tablenr+1)).appendChild(newOrder);
            
            
        }

        var sum = document.createTextNode(JS[item][tablenr].sum);
        document.getElementById("sum"+(tablenr+1)).appendChild(sum);
        
    
};

// Function to make a new order and then call addtoSum to update the total cost for all orders of that table
function makenewOrder(tablenr) {

    var db = Object.keys(JS)

    for (j = 200; j < 220; j++) {
        var val = document.getElementById(j).value;
        
        if (val > 0)
            {
            var itemid = j + 300;
            var text = $("#"+(itemid)).contents().filter(function() {
                return this.nodeType == Node.TEXT_NODE;
                }).text();
                for (i = val; i>0; i--) {
                    JS[db][tablenr].orders.push(text)
                    addtoSum(text,tablenr)
                }
            }
        // Reset values in submitlist
        document.getElementById(j).value = 0;
        }
    
    displayOrder(tablenr)    
    
}

// Updates a table's total cost of orders by adding the price of the new item
function addtoSum(item,tablenr) {
    
    var type = Object.keys(DB); // PRODUCTS
    var db = Object.keys(JS) // TABLES
    
    
    for (x = 0; x < Object.keys(DB).length; x++)
    {
        var type = Object.keys(DB)[x];
        for (z = 0; z < DB[type].length; z++) {
            if (item == DB[type][z].name)
            {
                // add price of added item to table sum
                var cost = parseInt(DB[type][z].priceinclvat)
                var currentsum = parseInt(JS[db][tablenr].sum)
                
                JS[db][tablenr].sum = cost + currentsum;
                
            }
        }
    }
    
}

// Function to remove the cost of an item for a table's total sum of orders.
function removefromSum(item,tablenr) {
    var type = Object.keys(DB);
    
    
    for (x = 0; x < Object.keys(DB).length; x++)
    {
        var type = Object.keys(DB)[x];
        for (z = 0; z < DB[type].length; z++) {
            if (item == DB[type][z].name)
            {
                // add price of added item to table sum
                var cost = parseInt(DB[type][z].priceinclvat)
                var currentsum = parseInt(JS[db][tablenr].sum)
                console.log(cost)
                JS[db][tablenr].sum = currentsum - cost;
                console.log(JS[db][tablenr].sum)
            }
        }
    }
    
}

// Function to directly navigate to the product/order page given a table number.
function gotoOrderpage(tablenr) {
    $("#tables").hide("slow");
    $("#menuchoice").hide("slow");
    $("#orderlist").hide("slow");
    $("#orderlist1").hide("slow");
    $("#orderlist2").hide("slow");
    $("#orderlist3").hide("slow");
    $("#orderlist4").hide("slow");
    $("#bottompage").hide("slow");
    $("#table1order").hide("slow");
    $("#table2order").hide("slow");
    $("#table3order").hide("slow");
    $("#table4order").hide("slow");
    $("#table"+(tablenr+1)+"order").show("slow");
    $("#tableorder").show("slow");
}