var priceBoxId = 0;
var dragableElement;

function displayProducts(DB)
{
    var buttonCount = 0;

    for (i = 0; i < Object.keys(DB).length; i++)
    {
        var type = Object.keys(DB)[i];

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
            rmvButton.setAttribute('onclick', "removeFromUnavailableList(this)");

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
                var curprice = e.currentTarget.value;
                var itemId = $(e.currentTarget).parent().parent().attr('id');
                var myarray = itemId.split(/([0-9]+)/).filter(Boolean);

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

            list.appendChild(drinkName);
            list.appendChild(button);
            list.appendChild(rmvButton);
            newDiv.appendChild(list);
            newDiv.appendChild(drinkInfoDiv);
            jsonDataPretty.appendChild(allDrinkInfo);
            drinkInfoDiv.appendChild(jsonDataPretty);
            drinkInfoDiv.appendChild(priceLabel);
            drinkInfoDiv.appendChild(priceBox);
            newDiv.appendChild(drinkInfoDiv);

            if (type == "beer") document.getElementById("beerlist").appendChild(newDiv);
            else if (type == "wine") document.getElementById("winelist").appendChild(newDiv);
            else if (type == "cocktail") document.getElementById("cocktaillist").appendChild(newDiv);
            else if (type == "dishes") document.getElementById("dishlist").appendChild(newDiv);
        }
    }

    setDataForDragAndDrop();

    productsShown = true;
}

function setDataForDragAndDrop()
{
    var dragables = document.querySelectorAll('.dragable');
    var unavailable = document.querySelector('.unavailable');

    for (var dragable of dragables)
    {
        dragable.addEventListener('dragstart', dragStart);
        dragable.addEventListener('dragend', dragEnd);
    }

    unavailable.addEventListener('dragover', dragOver);
    unavailable.addEventListener('dragenter', dragEnter);
    unavailable.addEventListener('dragleave', dragLeave);
    unavailable.addEventListener('drop', dragDrop);
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

function dragStart()
{
    this.className += ' hold';
    setTimeout(() => (this.className = 'invisible'), 0);
    dragableElement = this;
}

function dragEnd()
{
    this.className = 'dragable';
}

function dragOver(e)
{
    e.preventDefault();
}

function dragEnter(e)
{
    e.preventDefault();
    this.className += ' hovered';
}

function dragLeave()
{
    this.className = 'unavailable';
}

function dragDrop()
{
    this.className = 'unavailable';

    dragableElement.setAttribute('draggable', "false");

    var itemId = "#" + dragableElement.id;
    $(itemId).find('.rmvbtn').css("display", "inline");

    this.append(dragableElement);

    var myarray = dragableElement.id.split(/([0-9]+)/).filter(Boolean);

    var newData = changeAvailabilityOfProduct(myarray, false);
    $(itemId).find('.jsondata').text(JSON.stringify(newData, null, 2));
}

function removeFromUnavailableList(btn)
{
    var kindOfItem = $(btn).parent().parent().attr('id');

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

    var newData = changeAvailabilityOfProduct(myarray, true);
    $(itemId).find('.jsondata').text(JSON.stringify(newData, null, 2));
}