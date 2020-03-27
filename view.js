//variable used to assign id to each consecutive price box for each menu item
var priceBoxId = 0;
//variable for storing the element being dragged around on screen.
var dragableElement;

function displayProductz(Products)
{
    //variable used to assign id to each consecutive "Show more" button
    var buttonCount = 0;

    //loop through the number of different types of items in the Products json object
    for (i = 0; i < Object.keys(Products).length; i++)
    {
        //get the current type/key e.g beer, wine etc.
        var type = Object.keys(Products)[i];

        //loop through the number of items under the current type.
        for (j = 0; j < Products[type].length; j++)
        {
            //create a new div that will contain the name and buttons of each item.
            var newDiv = document.createElement("div");
            //set it's class name so that the css can pick up on this and change it's design when it is dragged around.
            newDiv.className = "dragable";
            //set it's id which is a concatination of which type it belongs to and it's unique 'nr'
            newDiv.id = type + Products[type][j].nr;
            //make the div draggable.
            newDiv.draggable = true;
            //some css for the div
            newDiv.setAttribute('style', 'width:500px');
            newDiv.setAttribute('style', 'margin-bottom:10px');

            //every div for a type will contains an ordered list so that the items are numbered.
            var list = document.createElement("li");
            var drinkName = document.createTextNode(Products[type][j].name);

            //create the button which shows all the information about a specific product.
            var button = document.createElement("button");
            //set it's id
            button.id = buttonCount++;
            button.innerHTML = "Show More";
            //bind it to a function which will be called when the button is pressed.
            button.setAttribute('onclick', "hideDiv(this.id)")
            button.setAttribute('style', 'border-bottom:groove');

            //create a 'remove' button which will stay hidden at first
            //and will only become visible when the item is dragged onto the unavailable list
            //clicking this button removes it from the list and returns it back to it's original container div.
            var rmvButton = document.createElement("button");
            rmvButton.innerHTML = "Remove";
            rmvButton.className = "rmvbtn";
            rmvButton.setAttribute('style', 'display:none; border-bottom:groove');
            rmvButton.setAttribute('onclick', "removeFromUnavailableList(this)");

            //all the details/information of an item will be contained in a separate div.
            var drinkInfoDiv = document.createElement("div");
            //this id will come in handy when toggling the "Show More" button
            drinkInfoDiv.id = "drink" + button.id;
            drinkInfoDiv.style = "display:none;border-style:solid;";

            //create a <pre> tag to contain all the json data of an item
            var jsonDataPretty = document.createElement("pre");
            jsonDataPretty.className = "jsondata";

            //display the information of each item as json data on the web page
            var allDrinkInfo = document.createTextNode(JSON.stringify(Products[type][j], null, 2));
            var priceLabel = document.createElement("label");
            priceLabel.innerHTML = "Price: ";

            //create a number field that will contain the price of the item
            var priceBox = document.createElement("input");
            priceBox.setAttribute('type', "number");
            //the default value displayed in the field will be the price including vat
            priceBox.setAttribute('value', Products[type][j].priceinclvat);

            //this function is called whenever the price field is changed i.e when the
            //price of an item is modified.
            $(priceBox).on('input', function (e)
            {
                //get the value from the field
                var curprice = e.currentTarget.value;
                //get the type of item this is and the unique nr of the item
                var itemId = $(e.currentTarget).parent().parent().attr('id');
                var myarray = itemId.split(/([0-9]+)/).filter(Boolean);

                //loop through the type of items.
                //when the particular item is encountered change it's 'curprice' attribute
                //do not change the 'priceinclvat' attribute.
                for (i = 0; i < Products[myarray[0]].length; i++)
                {
                    if (Products[myarray[0]][i].nr == myarray[1])
                    {
                        //change current price.
                        Products[myarray[0]][i].curprice = curprice;
                        //update the json data on the webpage.
                        $("#" + itemId).find('.jsondata').text(JSON.stringify(Products[myarray[0]][i], null, 2));
                        break;
                    }
                }
            });

            //the list contains the name of the item the "Show More" and "Remove" buttons
            list.appendChild(drinkName);
            list.appendChild(button);
            list.appendChild(rmvButton);

            //append elements to divs
            newDiv.appendChild(list);
            newDiv.appendChild(drinkInfoDiv);
            jsonDataPretty.appendChild(allDrinkInfo);
            drinkInfoDiv.appendChild(jsonDataPretty);
            drinkInfoDiv.appendChild(priceLabel);
            drinkInfoDiv.appendChild(priceBox);
            newDiv.appendChild(drinkInfoDiv);

            //append the item to the particular 'type div' that it belongs to
            if (type == "beer") document.getElementById("beerlist2").appendChild(newDiv);
            else if (type == "wine") document.getElementById("winelist2").appendChild(newDiv);
            else if (type == "cocktail") document.getElementById("cocktaillist2").appendChild(newDiv);
            else if (type == "dishes") document.getElementById("dishlist2").appendChild(newDiv);
        }
    }

    //setup the drag and drop functionality.
    setDataForDragAndDrop();

    //set this flag so that this is done only once.
    productsShown = true;
}


function setDataForDragAndDrop()
{
    //get all the divs that belong to the class 'dragable'
    var dragables = document.querySelectorAll('.dragable');
    //get the div which will contain the unavailable items; under class name 'unavailable'
    var unavailable = document.querySelector('.unavailable');

    //for every dragable div, bind it to the following helper functions
    for (var dragable of dragables)
    {
        dragable.addEventListener('dragstart', dragStart);
        dragable.addEventListener('dragend', dragEnd);
    }

    //the unavailable div get bounded to the following functions
    unavailable.addEventListener('dragover', dragOver);
    unavailable.addEventListener('dragenter', dragEnter);
    unavailable.addEventListener('dragleave', dragLeave);
    unavailable.addEventListener('drop', dragDrop);
}

//function is called when the "Show More" button is pressed next to
//every menu item. The id of the button clicked is passed in as parameter
function hideDiv(id)
{
    //get the id of the div containing the item's information information.
    var x = document.getElementById("drink" + id);

    //if the div is hidden unhide it
    if (x.style.display === "none")
    {
        $("#drink" + id).show("slow");
        document.getElementById(id).innerHTML = "Show Less"
    }
    //if the div is unhidden hide it.
    else
    {
        $("#drink" + id).hide("slow");
        document.getElementById(id).innerHTML = "Show More"
    }
}

//called when the draggable item first enters the draggable state
function dragStart()
{
    //change the class name so that the css can pick up on this and change the
    //design of the item so that it looks like it is being dragged.
    this.className += ' hold';
    setTimeout(() => (this.className = 'invisible'), 0);
    //store this item into the variable
    dragableElement = this;
}

//called when the item exits the 'draggable' state
function dragEnd()
{
    //reset the class name so that the item can be dragged again
    this.className = 'dragable';
}

//called when the item is on top of the 'unavailable' div
function dragOver(e)
{
    //block the current event
    e.preventDefault();
}

//called when an item is over or within the area of the 'unavailable' div
function dragEnter(e)
{
    //block the current event
    e.preventDefault();

    //change class name to indicate an item is on top of this object
    this.className += ' hovered';
}

//called when an item is dragged over and enters the space of this objects but then is moved
//away from it's space on the page.
function dragLeave()
{
    this.className = 'unavailable';
}

//called when the item is over the object and is let go of.
function dragDrop()
{
    //reset the class name of the 'unavailbe' div so that new items can be
    //dragged into it
    this.className = 'unavailable';

    //the item dragged in cannot be dragged anymore when in this div
    dragableElement.setAttribute('draggable', "false");

    //display the "remove" button
    var itemId = "#" + dragableElement.id;
    $(itemId).find('.rmvbtn').css("display", "inline");

    //make this div the new parent of this item div
    this.append(dragableElement);

    //get the id of this div
    var myarray = dragableElement.id.split(/([0-9]+)/).filter(Boolean);

    //call the function in controller.js to change availibility of this item
    var newData = changeAvailabilityOfProduct(myarray, false);
    //set the new json data of this item
    $(itemId).find('.jsondata').text(JSON.stringify(newData, null, 2));
}

//called when the remove button is clicked
function removeFromUnavailableList(btn)
{
    //get the id of the type of list that this item belongs to
    var typeOfItem = $(btn).parent().parent().attr('id');

    //get the div which previously contianed this item
    var element = document.getElementById(typeOfItem);
    //set it's draggable arttributes to how they were before.
    element.setAttribute('draggable', "true");
    var itemId = "#" + element.id;
    $(itemId).find('.rmvbtn').css("display", "none");

    //remove the item from the 'unavailable' div
    document.getElementById("unlist").removeChild(element);

    //place the item back in it's previous parent div
    if (typeOfItem.includes('beer')) document.getElementById("beerlist").appendChild(element);
    else if (typeOfItem.includes('wine')) document.getElementById("winelist").appendChild(element);
    else if (typeOfItem.includes('cocktail')) document.getElementById("cocktaillist").appendChild(element);
    else if (typeOfItem.includes('dishes')) document.getElementById("dishlist").appendChild(element);

    //get the item id and what type of item this is
    var myarray = typeOfItem.split(/([0-9]+)/).filter(Boolean);

    //call the function in controller.js to change the availibility
    var newData = changeAvailabilityOfProduct(myarray, true);
    //update the json data of this item.
    $(itemId).find('.jsondata').text(JSON.stringify(newData, null, 2));
}