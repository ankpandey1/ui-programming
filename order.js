var productsShown1 = false;
var productsShown2 = false;
var productsShown3 = false;
var productsShown4 = false;

var currentTable = 0;

$(function () {
    $("#newordert1").click(function () {
        if (!productsShown1)
        {
            displayProducts();  
        }
        currentTable = 1;
        productsShown1 = true;
    });
    $("#newordert2").click(function () {
        if (!productsShown2)
        {
            displayProducts();  
        }
        currentTable = 2;
        productsShown2 = true;
    });
    $("#newordert3").click(function () {
        if (!productsShown3)
        {
            displayProducts();  
        }
        currentTable = 3;
        productsShown3 = true;
    });
    $("#newordert4").click(function () {
        if (!productsShown4)
        {
            displayProducts();  
        }
        currentTable = 4;
        productsShown4 = true;
    });

    /*
    $("#submit1").click(function () {
        var object1 = {
            name: 'Beer',
            value: 1
    }

        var object2 = {
            name: 'Wine',
            value: 2
    }

        var node1 = document.createElement("li")
        
        var node2 = document.createElement("li")
       
        
        node1.appendChild(object1);
        node2.appendChild(object2);

        document.getElementById("orders1").appendChild(node1);
        document.getElementById("orders1").appendChild(node2);
    });
    */


});
/*
function increaseValue(number) {
    var value = parseInt(document.getElementById(number).value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById(number).value = value;
    }
  
function decreaseValue(number) {
    var value = parseInt(document.getElementById(number).value, 10);
    value = isNaN(value) ? 0 : value;
    value < 1 ? value = 1 : '';
    value--;
    document.getElementById(number).value = value;
    }

    function displayProducts()
    {
        var DB = Products;
    
        // console.log(DB);
        var buttonCount = 0;
    
        for (i = 0; i < Object.keys(DB).length; i++)
        {
            var type = Object.keys(DB)[i];
            // console.log(DB[type].length);
    
            for (j = 0; j < DB[type].length; j++)
            {
                var newDiv = document.createElement("div");
                var list = document.createElement("li");
                var drinkName = document.createTextNode(DB[type][j].name);
                var button = document.createElement("button");
                button.id = buttonCount++;
                button.innerHTML = "Show More";
                button.setAttribute('onclick', "hideDiv(this.id)")
                button.setAttribute('style', 'position:absolute; left:250px; border-bottom:groove');
                newDiv.setAttribute('style', 'width:500px');
                newDiv.setAttribute('style', 'margin-bottom:10px');
    
                var drinkInfoDiv = document.createElement("div");
                drinkInfoDiv.id = "drink" + button.id;
                drinkInfoDiv.style = "display:none;border-style:solid;";
    
                var jsonDataPretty = document.createElement("pre");
    
                var allDrinkInfo = document.createTextNode(JSON.stringify(DB[type][j], null, 2));
                var priceLabel = document.createElement("label");
                priceLabel.innerHTML = "Price: ";
    
                var priceBox = document.createElement("input");
                priceBox.setAttribute('type', "number");
                priceBox.setAttribute('value', DB[type][j].priceinclvat);
    
                var changeDataButton = document.createElement("button");
                changeDataButton.innerHTML = "Save Changes";
                changeDataButton.setAttribute('style', 'border-bottom:groove');
    
    
                list.appendChild(drinkName);
                list.appendChild(button);
                newDiv.appendChild(list);
                newDiv.appendChild(drinkInfoDiv);
                jsonDataPretty.appendChild(allDrinkInfo);
                drinkInfoDiv.appendChild(jsonDataPretty);
                drinkInfoDiv.appendChild(priceLabel);
                drinkInfoDiv.appendChild(priceBox);
                drinkInfoDiv.appendChild(changeDataButton);
                newDiv.appendChild(drinkInfoDiv);
    
                if (type == "beer") document.getElementById("beerlist").appendChild(newDiv);
                else if (type == "wine") document.getElementById("winelist").appendChild(newDiv);
                else if (type == "cocktail") document.getElementById("cocktaillist").appendChild(newDiv);
                else if (type == "dishes") document.getElementById("dishlist").appendChild(newDiv);
            }
        }
    
    // console.log(Object.keys(DB));
    // console.log(DB);

    productsShown = true;
}
*/