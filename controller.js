/*

var productShown = false;

$(function ()
{
    //show the Tables & Products button and hide everything else when the page loads
    $("#menuchoice").show();
    $("#productspage").hide();
    $("#unavailablearea").hide();

    //Used for testing purposes
    //   if (!productsShown) displayProducts(getDatabase());
    

    $("#productbutton").click(function ()
    {
        //when the product button is clicked hide the Tables & Products buttons and show the products page.
        $("#menuchoice").hide("slow");
        $("#productspage").show("slow");
        $("#unavailablearea").show("slow");
        //load the products and set up the products pafe only once
        if (!productsShown) displayProducts(getDatabase());
    });

    //back button functionality. Showd the Tables & Proucts buttons and hides everything else
    $("#tablesback").click(function ()
    {
        $("#menuchoice").show("slow");
        $("#productspage").hide("slow");
        $("#unavailablearea").hide("slow");
    });
});

*/

//change the availability of an item based on the parameters sent from the view.
function updateAvailability(myarray, availabilityValue)
{
    //call function in model.js to update the database.
    return changeAvailabilityOfProduct(myarray, availabilityValue);
}

//called when the login button is clicked on the login page
//values from the fields on the login page are passed in as parameters
function onLoginButtonClick(username, password) 
{
    //call function in model.js to search for user based on their login credentials
    //if the user is found in the database then go to the next page which is barwait.html
    if (getUser(username, password)) window.location.href = "barwait.html";
    //alert the user user is not found
    else alert("User NOT found");
}