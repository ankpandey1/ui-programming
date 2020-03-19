var productsShown = false;

$(function ()
{
    $("#menuchoice").show();
    $("#productspage").hide();
    $("#unavailablearea").hide();
    // if (!productsShown) displayProducts(getDatabase());

    $("#productbutton").click(function ()
    {
        $("#menuchoice").hide("slow");
        $("#productspage").show("slow");
        $("#unavailablearea").show("slow");
        if (!productsShown) displayProducts(getDatabase());
    });

    $("#tablesback").click(function ()
    {
        $("#menuchoice").show("slow");
        $("#productspage").hide("slow");
        $("#unavailablearea").hide("slow");
    });
});

function updateAvailability(myarray, availabilityValue)
{
    return changeAvailabilityOfProduct(myarray, availabilityValue);
}