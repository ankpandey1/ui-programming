var productsShown = false;

$(function ()
{
    // Show main menu from the start. Hide all tables
    //
    $("#menuchoice").show();
    $("#productspage").hide();
    // displayProducts();

    $("#productbutton").click(function ()
    {
        $("#menuchoice").hide("slow");
        $("#productspage").show("slow");
        if (!productsShown) displayProducts();
    });

    $("#tablesback").click(function ()
    {
        $("#menuchoice").show("slow");
        $("#productspage").hide("slow");
    });
});

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