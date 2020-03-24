// jQuery
$(document).ready(function ()
{
    if ($('body').is('.database'))
    {
        displayDatabase();
    }
});

function displayDatabase()
{
    //the json data that will contain all the information of specfic beverage categories.
    var DB_MenuItems = { "beer": [], "wine": [], "cocktail": [], "dishes": [] };

    //total number of beverages to store per category
    var numOfItemsPerType = 5;

    for (i = 0; i < DB2.spirits.length; i++)
    {
        //get the category of the beverage from the old database file that Lars created.
        var category = DB2.spirits[i].catgegory;

        //add 2 more attributes: the availibility and the price for the day
        DB2.spirits[i]["available"] = "true";
        DB2.spirits[i]["curprice"] = "0";

        /* Make sure the length of each key array in the json variable does not exceed 'numOfItemsPerType'*/

        //if the beverage is of category 'Ale' add it to the 'beer' key in the json variable
        if (DB_MenuItems.beer.length < numOfItemsPerType && category.includes("Ale")) DB_MenuItems.beer[DB_MenuItems.beer.length] = DB2.spirits[i]; // Beer = öl in swedish

        //if the beverage is of category 'Vin' add it to the 'wine' key in the json variable
        else if (DB_MenuItems.wine.length < numOfItemsPerType && category.includes("vin")) DB_MenuItems.wine[DB_MenuItems.wine.length] = DB2.spirits[i];

        //if the beverage is of category 'dryck' add it to the 'cocktail' key in the json variable
        else if (DB_MenuItems.cocktail.length < numOfItemsPerType && category.includes("dryck")) DB_MenuItems.cocktail[DB_MenuItems.cocktail.length] = DB2.spirits[i];

        //any other category add it to the 'dishes' key for now
        else if (DB_MenuItems.dishes.length < numOfItemsPerType) DB_MenuItems.dishes[DB_MenuItems.dishes.length] = DB2.spirits[i];
    }

    //boring html stuff
    var jsonData = document.createTextNode("var Products = " + JSON.stringify(DB_MenuItems, null, 2));
    var textArea = document.createElement("TEXTAREA");
    textArea.id = "textArea";
    textArea.setAttribute("readOnly", true);
    textArea.style = "width:500px; height:500px";
    textArea.appendChild(jsonData);
    document.getElementById("dataBaseDisplayer").appendChild(textArea);

    // console.log(DB_MenuItems.beer);
    // console.log(DB_MenuItems.wine);
    // console.log(DB_MenuItems.cocktail);
    // console.log(DB_MenuItems.dishes);
}

function copyText()
{
    //code to copy text from text area to clipboard
    var copyText = document.getElementById("textArea");
    copyText.select();
    document.execCommand("copy");
    alert("Copied the text!");
}