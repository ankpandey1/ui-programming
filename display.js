  
    // Function to display available products

    function displayProducts()
{
    var DB = Products;
    var JS = testJSON;

    var addbuttonCount = 0;
    var decbuttonCount = 100;
    var inputid = 200;
    var divstart = 500;

    for (i = 0; i < Object.keys(DB).length; i++)
    {
        var type = Object.keys(DB)[i];
        

        for (j = 0; j < DB[type].length; j++,inputid++,addbuttonCount++,decbuttonCount++,divstart++)
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
            list.id = divstart;
            
            addbutton.onclick = function() {

                increaseValue(this.id);
                };
            decbutton.onclick = function() {

                decreaseValue(this.id);
                };
            
            addbutton.innerHTML = "+";
            decbutton.innerHTML = "-";
            input.value = 0;

            
            input.setAttribute('style', 'width: 20px;')

            

            list.appendChild(input);
            list.appendChild(addbutton);
            list.appendChild(decbutton);
            list.appendChild(drinkName);
            
            newDiv.appendChild(list);
            

            if (type == "beer") document.getElementById("beerlist").appendChild(newDiv);
            else if (type == "wine") document.getElementById("winelist").appendChild(newDiv);
            else if (type == "cocktail") document.getElementById("cocktaillist").appendChild(newDiv);
            else if (type == "dishes") document.getElementById("dishlist").appendChild(newDiv);

        }
    }

    productsShown = true;
}

// When the "+" button is clicked it will increase the amount in the numbered field on the same row by 1
function increaseValue(numb) {
    var number = parseInt(numb) + 200;
    var value = parseInt(document.getElementById(number).value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById(number).value = value;
    }

// When the "-" button is clicked it will decrease the amount in the numbered field on the same row by 1
function decreaseValue(numb) {
    var number = parseInt(numb) + 100;
    var value = parseInt(document.getElementById(number).value, 10);
    value = isNaN(value) ? 0 : value;
    value < 1 ? value = 1 : '';
    value--;
    document.getElementById(number).value = value;
    }

