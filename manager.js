$(document).ready(function ()
{
    
    
    //get all the input feilds and store them in an
    //array for later use
    inputFields = document.querySelectorAll('.input');
    //get the drop down list element
    ddl = document.getElementById("dropdown");
    //populate the drop down list
    populateDropDownList();
    
});

var inputFields;
var ddl;
var myArray;

function populateDropDownList()
{
    for (i = 0; i < Object.keys(Products).length; i++)
    {
        //get the item type
        var itemType = Object.keys(Products)[i];

        //loop through each object for every item and add them to the 
        //drop down list
        for (j = 0; j < Products[itemType].length; j++)
        {
            var option = document.createElement("OPTION");
            option.innerHTML = Products[itemType][j].name + "-" + itemType.toUpperCase();
            option.value = itemType + Products[itemType][j].nr;
            ddl.options.add(option);
        }
    }
}

function populateInputFields(itemData)
{
    //get the item nr and the type it belongs to
    myArray = itemData.split(/([0-9]+)/).filter(Boolean);

    for (i = 0; i < Products[myArray[0]].length; i++)
    {
        //if a match is found populate the fields on the page
        //with the page with the key values
        if (Products[myArray[0]][i].nr == myArray[1])
        {
            var count = 0;
            for (var key of Object.keys(Products[myArray[0]][i]))
            {
                inputFields[count++].value = Products[myArray[0]][i][key];
            }
            break;
        }
    }
}

//this function is called when the button is pressed.
function changeData()
{
    //change the data in the database.
    for (i = 0; i < Products[myArray[0]].length; i++)
    {
        if (Products[myArray[0]][i].nr == myArray[1])
        {
            var count = 0;
            for (var key of Object.keys(Products[myArray[0]][i]))
            {
                Products[myArray[0]][i][key] = inputFields[count++].value
            }
            break;
        }


    }
}