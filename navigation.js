var productShown = false;

// Navigation for the whole bartender/manager view. 
// This is based on click-functions

$(function () {

    // Show main menu from the start.
    //
    $("#menuchoice").show();
    $("#bottompage").show();
    $("#tables").hide();
    $("#orderlist").hide();
    $("#orderlist1").hide();
    $("#orderlist2").hide();
    $("#orderlist3").hide();
    $("#orderlist4").hide();
    $("#table1order").hide();
    $("#table2order").hide();
    $("#table3order").hide();
    $("#table4order").hide();
    $("#tableorder").hide();
    $("#productsection").hide();
    $("#unavailablearea").hide();
    $("#managerview").hide();

    // Here we define the action when switching between menus. We add the activity as a click-function,
    // which is connected to the respective "tabs".

    // Displaying the 4 tablebuttons on click.
    $("#tablebutton").click(function () {
        $("#tables").show("slow");
        $("#menuchoice").hide("slow");
        $("#orderlist").hide("slow");
        $("#orderlist1").hide("slow");
        $("#orderlist2").hide("slow");
        $("#orderlist3").hide("slow");
        $("#orderlist4").hide("slow");
        $("#bottompage").hide("slow");
        $("#table1order").hide("slow");
        $("#table2order").hide("slow");
        $("#table3order").hide("slow");
        $("#table4order").hide("slow");
        $("#tableorder").hide("slow");
        $("#managerview").hide("slow");
        $("#productsection").hide("slow");
        $("#unavailablearea").hide("slow");
    });
    // Displaying current orders for all 4 different tables
    $("#table1").click(function () {
        $("#tables").hide("slow");
        $("#menuchoice").hide("slow");
        $("#orderlist").show("slow");
        $("#orderlist1").show("slow");
        $("#orderlist2").hide("slow");
        $("#orderlist3").hide("slow");
        $("#orderlist4").hide("slow");
        $("#bottompage").hide("slow");
        $("#table1order").hide("slow");
        $("#table2order").hide("slow");
        $("#table3order").hide("slow");
        $("#table4order").hide("slow");
        $("#tableorder").hide("slow");
        $("#managerview").hide("slow");
        $("#productsection").hide("slow");
        $("#unavailablearea").hide("slow");
    });

    $("#table2").click(function () {
        $("#tables").hide("slow");
        $("#menuchoice").hide("slow");
        $("#orderlist").show("slow");
        $("#orderlist1").hide("slow");
        $("#orderlist2").show("slow");
        $("#orderlist3").hide("slow");
        $("#orderlist4").hide("slow");
        $("#bottompage").hide("slow");
        $("#table1order").hide("slow");
        $("#table2order").hide("slow");
        $("#table3order").hide("slow");
        $("#table4order").hide("slow");
        $("#tableorder").hide("slow");
        $("#managerview").hide("slow");
        $("#productsection").hide("slow");
        $("#unavailablearea").hide("slow");
    });

    $("#table3").click(function () {
        $("#tables").hide("slow");
        $("#menuchoice").hide("slow");
        $("#orderlist").show("slow");
        $("#orderlist1").hide("slow");
        $("#orderlist2").hide("slow");
        $("#orderlist3").show("slow");
        $("#orderlist4").hide("slow");
        $("#bottompage").hide("slow");
        $("#table1order").hide("slow");
        $("#table2order").hide("slow");
        $("#table3order").hide("slow");
        $("#table4order").hide("slow");
        $("#tableorder").hide("slow");
        $("#managerview").hide("slow");
        $("#productsection").hide("slow");
        $("#unavailablearea").hide("slow");
    });

    $("#table4").click(function () {
        $("#tables").hide("slow");
        $("#menuchoice").hide("slow");
        $("#orderlist").show("slow");
        $("#orderlist1").hide("slow");
        $("#orderlist2").hide("slow");
        $("#orderlist3").hide("slow");
        $("#orderlist4").show("slow");
        $("#bottompage").hide("slow");
        $("#table1order").hide("slow");
        $("#table2order").hide("slow");
        $("#table3order").hide("slow");
        $("#table4order").hide("slow");
        $("#tableorder").hide("slow");
        $("#managerview").hide("slow");
        $("#productsection").hide("slow");
        $("#unavailablearea").hide("slow");
    });

    $("#orderlistback").click(function () {
        $("#tables").show("slow");
        $("#menuchoice").hide("slow");
        $("#orderlist").hide("slow");
        $("#orderlist1").hide("slow");
        $("#orderlist2").hide("slow");
        $("#orderlist3").hide("slow");
        $("#orderlist4").hide("slow");
        $("#bottompage").hide("slow");
        $("#table1order").hide("slow");
        $("#table2order").hide("slow");
        $("#table3order").hide("slow");
        $("#table4order").hide("slow");
        $("#tableorder").hide("slow");
        $("#managerview").hide("slow");
        $("#productsection").hide("slow");
        $("#unavailablearea").hide("slow");
    });
    // returning to main menu
    $("#tablesback").click(function () {
        $("#tables").hide("slow");
        $("#menuchoice").show("slow");
        $("#orderlist").hide("slow");
        $("#orderlist1").hide("slow");
        $("#orderlist2").hide("slow");
        $("#orderlist3").hide("slow");
        $("#orderlist4").hide("slow");
        $("#bottompage").show("slow");
        $("#table1order").hide("slow");
        $("#table2order").hide("slow");
        $("#table3order").hide("slow");
        $("#table4order").hide("slow");
        $("#tableorder").hide("slow");
        $("#managerview").hide("slow");
        $("#productsection").hide("slow");
        $("#unavailablearea").hide("slow");
    });
    // returning to main menu
    $("#tablesback2").click(function () {
        $("#tables").hide("slow");
        $("#menuchoice").show("slow");
        $("#orderlist").hide("slow");
        $("#orderlist1").hide("slow");
        $("#orderlist2").hide("slow");
        $("#orderlist3").hide("slow");
        $("#orderlist4").hide("slow");
        $("#bottompage").show("slow");
        $("#table1order").hide("slow");
        $("#table2order").hide("slow");
        $("#table3order").hide("slow");
        $("#table4order").hide("slow");
        $("#tableorder").hide("slow");
        $("#managerview").hide("slow");
        $("#productsection").hide("slow");
        $("#unavailablearea").hide("slow");
    });
    // Making new order (displaying available products) for all tables
    $("#newordert1").click(function () {
        $("#tables").hide("slow");
        $("#menuchoice").hide("slow");
        $("#orderlist").hide("slow");
        $("#orderlist1").hide("slow");
        $("#orderlist2").hide("slow");
        $("#orderlist3").hide("slow");
        $("#orderlist4").hide("slow");
        $("#bottompage").hide("slow");
        $("#table1order").show("slow");
        $("#table2order").hide("slow");
        $("#table3order").hide("slow");
        $("#table4order").hide("slow");
        $("#tableorder").show("slow");
        $("#managerview").hide("slow");
        $("#productsection").hide("slow");
        $("#unavailablearea").hide("slow");
    });

    $("#newordert2").click(function () {
        $("#tables").hide("slow");
        $("#menuchoice").hide("slow");
        $("#orderlist").hide("slow");
        $("#orderlist1").hide("slow");
        $("#orderlist2").hide("slow");
        $("#orderlist3").hide("slow");
        $("#orderlist4").hide("slow");
        $("#bottompage").hide("slow");
        $("#table1order").hide("slow");
        $("#table2order").show("slow");
        $("#table3order").hide("slow");
        $("#table4order").hide("slow");
        $("#tableorder").show("slow");
        $("#managerview").hide("slow");
        $("#productsection").hide("slow");
        $("#unavailablearea").hide("slow");
    });

    $("#newordert3").click(function () {
        $("#tables").hide("slow");
        $("#menuchoice").hide("slow");
        $("#orderlist").hide("slow");
        $("#orderlist1").hide("slow");
        $("#orderlist2").hide("slow");
        $("#orderlist3").hide("slow");
        $("#orderlist4").hide("slow");
        $("#bottompage").hide("slow");
        $("#table1order").hide("slow");
        $("#table2order").hide("slow");
        $("#table3order").show("slow");
        $("#table4order").hide("slow");
        $("#tableorder").show("slow");
        $("#managerview").hide("slow");
        $("#productsection").hide("slow");
        $("#unavailablearea").hide("slow");
    });

    $("#newordert4").click(function () {
        $("#tables").hide("slow");
        $("#menuchoice").hide("slow");
        $("#orderlist").hide("slow");
        $("#orderlist1").hide("slow");
        $("#orderlist2").hide("slow");
        $("#orderlist3").hide("slow");
        $("#orderlist4").hide("slow");
        $("#bottompage").hide("slow");
        $("#table1order").hide("slow");
        $("#table2order").hide("slow");
        $("#table3order").hide("slow");
        $("#table4order").show("slow");
        $("#tableorder").show("slow");
        $("#managerview").hide("slow");
        $("#productsection").hide("slow");
        $("#unavailablearea").hide("slow");
    });
    // Submit buttons for all 4 tables
    $("#submit1").click(function () {       
        $("#tables").hide("slow");
        $("#menuchoice").hide("slow");
        $("#orderlist").show("slow");
        $("#orderlist1").show("slow");
        $("#orderlist2").hide("slow");
        $("#orderlist3").hide("slow");
        $("#orderlist4").hide("slow");
        $("#bottompage").hide("slow");
        $("#table1order").hide("slow");
        $("#table2order").hide("slow");
        $("#table3order").hide("slow");
        $("#table4order").hide("slow");
        $("#tableorder").hide("slow");
        $("#managerview").hide("slow");
        $("#productsection").hide("slow");
        $("#unavailablearea").hide("slow");
    });

    $("#submit2").click(function () {       
        $("#tables").hide("slow");
        $("#menuchoice").hide("slow");
        $("#orderlist").show("slow");
        $("#orderlist1").hide("slow");
        $("#orderlist2").show("slow");
        $("#orderlist3").hide("slow");
        $("#orderlist4").hide("slow");
        $("#bottompage").hide("slow");
        $("#table1order").hide("slow");
        $("#table2order").hide("slow");
        $("#table3order").hide("slow");
        $("#table4order").hide("slow");
        $("#tableorder").hide("slow");
        $("#managerview").hide("slow");
        $("#productsection").hide("slow");
        $("#unavailablearea").hide("slow");
    });

    $("#submit3").click(function () {       
        $("#tables").hide("slow");
        $("#menuchoice").hide("slow");
        $("#orderlist").show("slow");
        $("#orderlist1").hide("slow");
        $("#orderlist2").hide("slow");
        $("#orderlist3").show("slow");
        $("#orderlist4").hide("slow");
        $("#bottompage").hide("slow");
        $("#table1order").hide("slow");
        $("#table2order").hide("slow");
        $("#table3order").hide("slow");
        $("#table4order").hide("slow");
        $("#tableorder").hide("slow");
        $("#managerview").hide("slow");
        $("#productsection").hide("slow");
        $("#unavailablearea").hide("slow");
    });

    $("#submit4").click(function () {       
        $("#tables").hide("slow");
        $("#menuchoice").hide("slow");
        $("#orderlist").show("slow");
        $("#orderlist1").hide("slow");
        $("#orderlist2").hide("slow");
        $("#orderlist3").hide("slow");
        $("#orderlist4").show("slow");
        $("#bottompage").hide("slow");
        $("#table1order").hide("slow");
        $("#table2order").hide("slow");
        $("#table3order").hide("slow");
        $("#table4order").hide("slow");
        $("#tableorder").hide("slow");
        $("#managerview").hide("slow");
        $("#productsection").hide("slow");
        $("#unavailablearea").hide("slow");
    });
    $("#productbutton").click(function ()
    {
        //when the product button is clicked hide the Tables & Products buttons and show the products page.
        $("#productsection").show("slow");
        $("#unavailablearea").show("slow");

        $("#tables").hide("slow");
        $("#menuchoice").hide("slow");
        $("#orderlist").hide("slow");
        $("#orderlist1").hide("slow");
        $("#orderlist2").hide("slow");
        $("#orderlist3").hide("slow");
        $("#orderlist4").hide("slow");
        $("#bottompage").hide("slow");
        $("#table1order").hide("slow");
        $("#table2order").hide("slow");
        $("#table3order").hide("slow");
        $("#table4order").hide("slow");
        $("#tableorder").hide("slow");
        $("#managerview").hide("slow");
        //load the products and set up the products pafe only once
        if (!productShown) displayProductz(getDatabase());
    });

    // Display manager view
    $("#managerbutton").click(function ()
    {   
        window.alert("Only proceed if you are the manager")
        $("#productsection").hide("slow");
        $("#unavailablearea").hide("slow");
        $("#tables").hide("slow");
        $("#menuchoice").hide("slow");
        $("#orderlist").hide("slow");
        $("#orderlist1").hide("slow");
        $("#orderlist2").hide("slow");
        $("#orderlist3").hide("slow");
        $("#orderlist4").hide("slow");
        $("#bottompage").hide("slow");
        $("#table1order").hide("slow");
        $("#table2order").hide("slow");
        $("#table3order").hide("slow");
        $("#table4order").hide("slow");
        $("#tableorder").hide("slow");
        $("#managerview").show("slow");
    });
    
});