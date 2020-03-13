  

    function displayProducts()
{
    var DB = Products;

    // console.log(DB);
    var addbuttonCount = 0;
    var decbuttonCount = 100;
    var inputid = 200;

    for (i = 0; i < Object.keys(DB).length; i++)
    {
        var type = Object.keys(DB)[i];
        // console.log(DB[type].length);

        for (j = 0; j < DB[type].length; j++,inputid++,addbuttonCount++,decbuttonCount++)
        {
            var newDiv = document.createElement("div");
            var list = document.createElement("li");
            var drinkName = document.createTextNode(DB[type][j].name);

            var input = document.createElement("input");
            var addbutton = document.createElement("button");
            var decbutton = document.createElement("button");
            addbutton.id = addbuttonCount;
            decbutton.id = decbuttonCount;
            input.id = inputid;
            
            addbutton.onclick = function() {

                increaseValue(this.id);
                };
            decbutton.onclick = function() {

                decreaseValue(this.id);
                };
            
            addbutton.innerHTML = "+";
            decbutton.innerHTML = "-";
            input.value = 0;

            //input.value = 0;
            input.setAttribute('style', 'width: 20px;')

            /*
            button.setAttribute('style', 'position:relative; left: 10px; border-bottom:groove');       
            button.setAttribute('style', 'position:absolute; left:250px; border-bottom:groove');
            newDiv.setAttribute('style', 'width:500px');
            newDiv.setAttribute('style', 'margin-bottom:10px');
            */

            /*
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
            */

            list.appendChild(input);
            list.appendChild(addbutton);
            list.appendChild(decbutton);
            list.appendChild(drinkName);
            
            newDiv.appendChild(list);
            /*
            newDiv.appendChild(drinkInfoDiv);
            jsonDataPretty.appendChild(allDrinkInfo);
            drinkInfoDiv.appendChild(jsonDataPretty);
            drinkInfoDiv.appendChild(priceLabel);
            drinkInfoDiv.appendChild(priceBox);
            drinkInfoDiv.appendChild(changeDataButton);
            newDiv.appendChild(drinkInfoDiv);
            */

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


function increaseValue(numb) {
    var number = parseInt(numb) + 200;
    var value = parseInt(document.getElementById(number).value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById(number).value = value;
    }
  
function decreaseValue(numb) {
    var number = parseInt(numb) + 100;
    var value = parseInt(document.getElementById(number).value, 10);
    value = isNaN(value) ? 0 : value;
    value < 1 ? value = 1 : '';
    value--;
    document.getElementById(number).value = value;
    }

function hideDiv(id)
{
    
    var x = document.getElementById("drink" + id);

    if (x.style.display === "none")
    {
        $("#drink" + id).show("slow");
        document.getElementById(id).innerHTML = "Show Less"
    }
    else
    {
        $("#drink" + id).hide("slow");
        document.getElementById(id).innerHTML = "Show More"
    }
    
}

$(function () {

    var TDB = Tables;

    $("#submit1").click(function () {
        for (j = 200; j < 220; j++)
    {
        var val = document.getElementById(j).value;
        console.log(val)
        if (val > 0)
        {
            // Add product to database
        }

    }
    });

});