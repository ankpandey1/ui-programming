  

    function displayProducts()
{
    var DB = Products;
    var JS = testJSON;

    // console.log(DB);
    var addbuttonCount = 0;
    var decbuttonCount = 100;
    var inputid = 200;
    var divstart = 500;

    for (i = 0; i < Object.keys(DB).length; i++)
    {
        var type = Object.keys(DB)[i];
        // console.log(DB[type].length);

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

/*
$(function () {

    var db = Object.keys(JS)

    $("#submit1").click(function () {
        for (j = 200; j < 220; j++)
    {
        var val = document.getElementById(j).value;
        console.log(val)
        if (val > 0)
        {
            var itemid = j + 300;
            var text = $("#"+(itemid)).contents().filter(function() {
                return this.nodeType == Node.TEXT_NODE;
              }).text();
            for (i = val; i>0; i--) {
                JS[db][0].orders.push(text)
            }
        }
        // Reset values in submitlist
        document.getElementById(j).value = 0;
    }
    displayOrder()

    });

});
*/
// table1 = klick
// orderlist1 = id där allt ska visas