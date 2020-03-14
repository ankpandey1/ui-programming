var productsShown = false;
var priceBoxId = 0;

$(function ()
{
    // Show main menu from the start. Hide all tables
    //
    $("#menuchoice").hide();
    $("#productspage").show();
    if (!productsShown) displayProducts();

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
            newDiv.className = "dragable";
            newDiv.id = type + DB[type][j].nr;
            newDiv.draggable = true;
            var list = document.createElement("li");
            var drinkName = document.createTextNode(DB[type][j].name);
            var button = document.createElement("button");
            button.id = buttonCount++;
            button.innerHTML = "Show More";
            button.setAttribute('onclick', "hideDiv(this.id)")
            button.setAttribute('style', 'border-bottom:groove');
            var rmvButton = document.createElement("button");
            rmvButton.innerHTML = "Remove";
            rmvButton.className = "rmvbtn";
            rmvButton.setAttribute('style', 'display:none; border-bottom:groove');
            rmvButton.setAttribute('onclick', "removeItem(this)");

            newDiv.setAttribute('style', 'width:500px');
            newDiv.setAttribute('style', 'margin-bottom:10px');

            var drinkInfoDiv = document.createElement("div");
            drinkInfoDiv.id = "drink" + button.id;
            drinkInfoDiv.style = "display:none;border-style:solid;";

            var jsonDataPretty = document.createElement("pre");
            jsonDataPretty.className = "jsondata";

            var allDrinkInfo = document.createTextNode(JSON.stringify(DB[type][j], null, 2));
            var priceLabel = document.createElement("label");
            priceLabel.innerHTML = "Price: ";

            var priceBox = document.createElement("input");
            priceBox.setAttribute('type', "number");
            priceBox.setAttribute('value', DB[type][j].priceinclvat);

            $(priceBox).on('input', function (e)
            {
                // console.log(e.currentTarget.id);
                var curprice = e.currentTarget.value;
                var itemId = $(e.currentTarget).parent().parent().attr('id');
                var myarray = itemId.split(/([0-9]+)/).filter(Boolean);

                // console.log(curprice);

                for (i = 0; i < Products[myarray[0]].length; i++)
                {
                    if (Products[myarray[0]][i].nr == myarray[1])
                    {
                        Products[myarray[0]][i].curprice = curprice;
                        $("#" + itemId).find('.jsondata').text(JSON.stringify(Products[myarray[0]][i], null, 2));
                        break;
                    }
                }
            });


            // var changeDataButton = document.createElement("button");
            // changeDataButton.innerHTML = "Save Changes";
            // changeDataButton.setAttribute('style', 'border-bottom:groove');
            // changeDataButton.setAttribute('onclick', "changePrice(this)");

            list.appendChild(drinkName);
            list.appendChild(button);
            list.appendChild(rmvButton);
            newDiv.appendChild(list);
            newDiv.appendChild(drinkInfoDiv);
            jsonDataPretty.appendChild(allDrinkInfo);
            drinkInfoDiv.appendChild(jsonDataPretty);
            drinkInfoDiv.appendChild(priceLabel);
            drinkInfoDiv.appendChild(priceBox);
            // drinkInfoDiv.appendChild(changeDataButton);
            newDiv.appendChild(drinkInfoDiv);

            if (type == "beer") document.getElementById("beerlist").appendChild(newDiv);
            else if (type == "wine") document.getElementById("winelist").appendChild(newDiv);
            else if (type == "cocktail") document.getElementById("cocktaillist").appendChild(newDiv);
            else if (type == "dishes") document.getElementById("dishlist").appendChild(newDiv);
        }
    }

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

function removeItem(btn)
{
    var kindOfItem = $(btn).parent().parent().attr('id');
    // console.log(kindOfItem);

    var element = document.getElementById(kindOfItem);
    element.setAttribute('draggable', "true");
    var itemId = "#" + element.id;
    $(itemId).find('.rmvbtn').css("display", "none");

    document.getElementById("unlist").removeChild(element);

    if (kindOfItem.includes('beer')) document.getElementById("beerlist").appendChild(element);
    else if (kindOfItem.includes('wine')) document.getElementById("winelist").appendChild(element);
    else if (kindOfItem.includes('cocktail')) document.getElementById("cocktaillist").appendChild(element);
    else if (kindOfItem.includes('dishes')) document.getElementById("dishlist").appendChild(element);

    var myarray = kindOfItem.split(/([0-9]+)/).filter(Boolean);
    updateDataBase(itemId, myarray, true);
}

function updateDataBase(itemId, myarray, val)
{
    // console.log(itemId);
    for (i = 0; i < Products[myarray[0]].length; i++)
    {
        if (Products[myarray[0]][i].nr == myarray[1])
        {
            Products[myarray[0]][i].available = val;
            // if (val) console.log(Products[myarray[0]][i]);
            $(itemId).find('.jsondata').text(JSON.stringify(Products[myarray[0]][i], null, 2));
            break;
        }
    }
}