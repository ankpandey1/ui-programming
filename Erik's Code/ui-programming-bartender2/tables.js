$(function ()
{
    // Show main menu from the start. Hide all tables
    //
    $("#menuchoice").hide();
    $("#productlist").hide();
    $("#bottompage").show();
    $("#tables").hide();
    $("#orderlist").hide();
    $("#orderlist1").hide();
    $("#orderlist2").hide();
    $("#orderlist3").hide();
    $("#orderlist4").hide();

    // Testing begins here
    $("#productlist").show()

    $("#productbutton").click(function ()
    {
        $("#menuchoice").hide("slow");
        $("#productlist").show("slow");
        console.log("asd");
    });

    //

    // Here we define the action when switching between menus. We add the activity as a click-function,
    // which is connected to the respective "tabs". The actual switching is done by

    $("#tablebutton").click(function ()
    {
        $("#tables").show("slow");
        $("#menuchoice").hide("slow");
        $("#orderlist").hide("slow");
        $("#orderlist1").hide("slow");
        $("#orderlist2").hide("slow");
        $("#orderlist3").hide("slow");
        $("#orderlist4").hide("slow");
        $("#bottompage").hide("slow");
    });

    $("#table1").click(function ()
    {
        $("#tables").hide("slow");
        $("#menuchoice").hide("slow");
        $("#orderlist").show("slow");
        $("#orderlist1").show("slow");
        $("#orderlist2").hide("slow");
        $("#orderlist3").hide("slow");
        $("#orderlist4").hide("slow");
        $("#bottompage").hide("slow");
    });

    $("#table2").click(function ()
    {
        $("#tables").hide("slow");
        $("#menuchoice").hide("slow");
        $("#orderlist").show("slow");
        $("#orderlist1").hide("slow");
        $("#orderlist2").show("slow");
        $("#orderlist3").hide("slow");
        $("#orderlist4").hide("slow");
        $("#bottompage").hide("slow");
    });

    $("#table3").click(function ()
    {
        $("#tables").hide("slow");
        $("#menuchoice").hide("slow");
        $("#orderlist").show("slow");
        $("#orderlist1").hide("slow");
        $("#orderlist2").hide("slow");
        $("#orderlist3").show("slow");
        $("#orderlist4").hide("slow");
        $("#bottompage").hide("slow");
    });

    $("#table4").click(function ()
    {
        $("#tables").hide("slow");
        $("#menuchoice").hide("slow");
        $("#orderlist").show("slow");
        $("#orderlist1").hide("slow");
        $("#orderlist2").hide("slow");
        $("#orderlist3").hide("slow");
        $("#orderlist4").show("slow");
        $("#bottompage").hide("slow");
    });

    $("#orderlistback").click(function ()
    {
        $("#tables").show("slow");
        $("#menuchoice").hide("slow");
        $("#orderlist").hide("slow");
        $("#orderlist1").hide("slow");
        $("#orderlist2").hide("slow");
        $("#orderlist3").hide("slow");
        $("#orderlist4").hide("slow");
        $("#bottompage").hide("slow");
    });

    $("#tablesback").click(function ()
    {
        $("#tables").hide("slow");
        $("#menuchoice").show("slow");
        $("#orderlist").hide("slow");
        $("#orderlist1").hide("slow");
        $("#orderlist2").hide("slow");
        $("#orderlist3").hide("slow");
        $("#orderlist4").hide("slow");
        $("#bottompage").show("slow");
        console.log("asd");
    });
});