var productsShown = false;

var currentTable = 0;
var TB = Tables;
var JS = testJSON;
var DB = Products;

//var editidstart = 1000;
//var deleteidstart = 1100;
//var orderstart = 2000;

$(function () {
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

function editOrder(item,tablenr) {
    var itemid = parseInt(document.getElementById(item).id) + 100;
    deleteOrder(itemid,tablenr)

}

function deleteOrder(item,tablenr) {
    var itemid = parseInt(document.getElementById(item).id) + 900;
    console.log(itemid)
    var text = $("#"+(itemid)).contents().filter(function() {
        return this.nodeType == Node.TEXT_NODE;
      }).text();
    console.log(text)  
    var db = Object.keys(JS)

    for (j = 0; j < JS[db][tablenr].orders.length; j++) {
        if (text == JS[db][tablenr].orders[j]) {            
            JS[db][0].orders.splice(j, 1);       
        }       
    }
    removefromSum(text,tablenr)
    displayOrder(tablenr)
    
}

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

function addtoSum(item,tablenr) {
    
    var type = Object.keys(DB);
    var db = Object.keys(JS)
    
    
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
                JS[db][tablenr].sum = cost + currentsum;
                console.log(JS[db][tablenr].sum)
            }
        }
    }
    
}

function removefromSum(item,tablenr) {
    var type = Object.keys(DB);
    var db = Object.keys(JS)
    
    
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

